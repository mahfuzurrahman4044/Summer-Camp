import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [paidClasses, setPaidClasses] = useState([]);

  useEffect(() => {
    fetch(`https://summer-camp-server-pied-alpha.vercel.app/payments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPaidClasses(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  const sortedPaymentHistory = paidClasses.sort((a, b) =>
    b._id.localeCompare(a._id)
  );

  if (sortedPaymentHistory.length === 0) {
    return <div>No classes available</div>;
  }

  return (
    <div>
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-base-300 text-center">#</th>
            <th className="border border-base-300 text-center">Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedPaymentHistory.map((singleClass, index) => (
            <tr key={singleClass._id}>
              <td className="border border-base-300 text-center">{index + 1}</td>
              <td className="border border-base-300 text-center">${singleClass.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
