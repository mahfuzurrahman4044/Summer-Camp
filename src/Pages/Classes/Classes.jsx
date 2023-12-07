import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  // console.log(classes);
  useEffect(() => {
    fetch("https://summer-camp-server-mahfuzurrahman4044.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const approvedClasses = classes.filter(
    (classes) => classes?.status === "Approved"
  );

  return (
    <div className="grid lg:grid-cols-3 ps-20 lg:py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      {approvedClasses.map((singleClass) => (
        <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>
      ))}
    </div>
  );
};

export default Classes;
