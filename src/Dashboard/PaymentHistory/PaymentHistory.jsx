
import UseQuery from "../../UseQuery/UseQuery";

const PaymentHistory = () => {
  const [, classes] = UseQuery();
  const enrolledClasses = classes?.filter(
    (singleClass) => singleClass?.paymentStatus === "Paid"
  );

  // Sort payment history in descending order
  const sortedPaymentHistory = enrolledClasses.sort((a, b) =>
    b._id.localeCompare(a._id)
  );
  if (sortedPaymentHistory.length === 0) {
    return <div>No classes available</div>;
  }
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Buyer</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedPaymentHistory.map((singleClass, index) => (
            <tr key={singleClass._id}>
              <td>{index + 1}</td>
              <td>{singleClass.email}</td>
              <td>${singleClass.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
