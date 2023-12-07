import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../UseAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";

// import "./Checkout.css";

const Checkout = ({ classes, price }) => {
  //   console.log(price);

  const user = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = UseAxiosSecure();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        //         console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //       console.log("PaymentMethod", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user ? user.displayName : "Anonymous",
            email: user ? user.email : "Unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    //     console.log(paymentIntent);

    setProcessing(false);

    if (paymentIntent.status == "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);
      const payment = {
        user: user?.user?.email,
        transactionId: transactionId,
        price,
        numberOfClasses: classes.length,
        classesId: classes.map((unique) => unique._id),
        classesImage: classes.map((unique) => unique.image),
        classesNames: classes.map((unique) => unique.classTitle),
        classesInstructorName: classes.map((unique) => unique.instructorName),
        availableClasses: classes.map((unique) => unique.availableClasses),
      };
      //       console.log(payment);

      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: 500 }}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary lg:my-2"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        {cardError ? <p className="text-red-600">{cardError}</p> : ""}
        {transactionId ? (
          <p className="text-green-600 bg-pink-600 p-4 rounded-md">
            Payment has been completed. You transactionId is {transactionId}
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Checkout;
