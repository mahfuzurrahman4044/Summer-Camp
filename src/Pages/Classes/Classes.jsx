import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    // console.log(classes);
    useEffect(() => {
        fetch("https://summer-camp-server-blue.vercel.app/classes")
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-3 ps-8">
            {
                classes.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
            }
        </div>
    );
};

export default Classes;
