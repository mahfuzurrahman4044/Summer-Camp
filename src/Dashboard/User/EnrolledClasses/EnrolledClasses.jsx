import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaTrash } from "react-icons/fa";

const EnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnrolledClasses(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  if (enrolledClasses.length === 0) {
    return <div>No classes available</div>;
  }

  return (
    <div>
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-base-300 text-center"> # </th>
            <th className="border border-base-300 text-center"> Class </th>
            <th className="border border-base-300 text-center"> Instructor </th>
            <th className="border border-base-300 text-center">
              {" "}
              Available seats{" "}
            </th>
            <th className="border border-base-300 text-center"> Price </th>
          </tr>
        </thead>
        <tbody>
          {enrolledClasses.map((singleClass, index) => (
            <tr key={singleClass._id}>
              <td className="border border-base-300 text-center">
                {" "}
                {index + 1}{" "}
              </td>

              <td className="border border-base-300 text-center">
                {" "}
                {singleClass.classesNames.map((name, idx) => (
                  <div key={idx}>{name}</div>
                ))}{" "}
              </td>
              <td className="border border-base-300 text-center">
                {" "}
                {singleClass.classesInstructorName.map((instructor, idx) => (
                  <div key={idx}>{instructor}</div>
                ))}{" "}
              </td>
              <td className="border border-base-300 text-center">
                {" "}
                {singleClass.availableClasses.map((available, idx) => (
                  <div key={idx}>{available}</div>
                ))}{" "}
              </td>
              <td className="border border-base-300 text-center">
                {" "}
                ${singleClass.price}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClasses;
