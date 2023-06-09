
import { useEffect, useState } from "react";
import InstructorsTable from "./InstructorsTable";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    console.log(instructors);
    useEffect(() => {
        fetch("http://localhost:5000/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-3 ps-10">
            {
                instructors.map(instructor => <InstructorsTable key={instructor._id} instructor={instructor}></InstructorsTable>)
            }
        </div>
    );
};

export default Instructors;
