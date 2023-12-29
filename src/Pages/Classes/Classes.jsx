import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  // console.log(classes);
  useEffect(() => {
    fetch("https://summer-camp-server-pied-alpha.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        // console.log(classes);
      });
  }, []);

  const approvedClasses = classes.filter(
    (classes) => classes?.status === "Approved"
  );

  // console.log(approvedClasses);

  return (
    <div className="grid lg:grid-cols-3 lg:ps-20 ps-16 lg:py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      {approvedClasses.map((singleClass) => (
        <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>
      ))}
    </div>
  );
};

export default Classes;