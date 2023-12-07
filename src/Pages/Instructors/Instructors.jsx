import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-mahfuzurrahman4044.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <div className="lg:pt-5 lg:px-20 lg:pb-0 pb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <table className="w-full border-collapse border border-base-300">
        <thead>
          <tr className="bg-base-300">
            <th className="p-4">Image</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor._id} className="border border-base-300">
              <td className="p-4 text-center">
                <div className="avatar">
                  <div className="mask mask-squircle w-32 h-32 border border-base-300 text-center">
                    <img className="flex justify-center" src={instructor.img} alt="" />
                  </div>
                </div>
              </td>
              <td className="uppercase font-semibold p-4 border border-base-300 text-center">
                {instructor.name}
              </td>
              <td className="p-4 border border-base-300 text-center">{instructor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;
