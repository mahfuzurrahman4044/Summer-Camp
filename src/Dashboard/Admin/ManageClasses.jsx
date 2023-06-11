import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  //   console.log(classes);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const handleApprovedStatus = (id) => {
    //     console.log(id);
    fetch(`http://localhost:5000/classes/approved/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        //         console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${id} has been approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDenyStatus = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/classes/deny/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        //         console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${id} has been deny`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {classes.map((singleClass) => (
          <div key={singleClass._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={singleClass.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleClass.classTitle}</h2>
                <p>{`Instructor Name: ${singleClass.instructorName}`}</p>
                <p>{`Instructor Email: ${
                  singleClass.email ? singleClass.email : "Not set"
                }`}</p>
                <p>{`Avaiable seats: ${singleClass.availableClasses}`}</p>
                <p>{`Price: $${singleClass.price}`}</p>
                <p>{`Status: ${singleClass.status}`}</p>
                <div>
                  <button
                    className={`${
                      singleClass.status == "pending"
                        ? "btn btn-outline border border-0 border-b-4 border-primary m-1"
                        : "btn-disabled btn m-1"
                    }`}
                    onClick={() => handleApprovedStatus(singleClass._id)}
                  >
                    Approved
                  </button>
                  <button
                    className={`${
                      singleClass.status == "pending"
                        ? "btn btn-outline border border-0 border-b-4 border-primary m-1"
                        : "btn-disabled btn m-1"
                    }`}
                    onClick={() => handleDenyStatus(singleClass._id)}
                  >
                    Deny
                  </button>

                  <button className="btn btn-outline border border-0 border-b-4 border-primary m-1">
                    Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
