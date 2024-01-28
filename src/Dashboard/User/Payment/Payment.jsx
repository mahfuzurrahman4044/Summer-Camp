import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../Checkout/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import UseQuery from "../../../UseQuery/UseQuery";

const Payment = () => {
  const [refetch, classes] = UseQuery();
  const price = parseFloat(
    classes.reduce((sum, item) => item.price + sum, 0)
  ).toFixed(2);

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div>
      <div className="text-center my-10 lg:w-1/2 w-1/4 mx-auto">
        <h3 className="lg:text-3xl border-y-4 lg:py-4 font-semibold">
          Payment
        </h3>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <Checkout classes={classes} price={price}></Checkout>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
