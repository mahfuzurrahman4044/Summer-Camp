import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://summer-camp-server-mahfuzurrahman4044.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(classes);
      });
  }, []);

  if (classes.length === 0) {
    return <div>No classes available</div>;
  }

  return (
    <div>
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-base-300 text-center">#</th>
            <th className="border border-base-300 text-center">Image</th>
            <th className="border border-base-300 text-center">Class</th>
            <th className="border border-base-300 text-center">Instructor</th>
            <th className="border border-base-300 text-center">Available seats</th>
            <th className="border border-base-300 text-center">Price</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((singleClass, index) => (
            <tr key={singleClass._id}>
              <td className="border border-base-300 text-center">{index + 1}</td>
              <td className="border border-base-300 text-center">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={singleClass.img}
                      alt="Class Image"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
              </td>
              <td className="border border-base-300">{singleClass.classTitle}</td>
              <td className="border border-base-300">{singleClass.instructorName}</td>
              <td className="border border-base-300 text-center">{singleClass.availableClasses}</td>
              <td className="border border-base-300 text-center">${singleClass.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
