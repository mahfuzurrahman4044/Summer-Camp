import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ClassCard = ({ singleClass }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { img, classTitle, instructorName, availableClasses, price } =
    singleClass;
  const { user } = useContext(AuthContext);
  // console.log(user);

  const isAdmin = user?.role=="admin"
  // console.log(instructorName);
  const isInstructer = user?.role=="instructor"
  // console.log(isInstructer);

  const isUserLoggedIn = !!user;
  const isButtonDisabled =
    availableClasses === 0 || (isUserLoggedIn && (isAdmin || isInstructer));

  const navigate = useNavigate();
  const location = useLocation();

  const handleClass = (items) => {
    if (user !== null && user.email) {
      const { img, classTitle, instructorName, availableClasses, price } =
        items;
      const selectedClass = {
        id: items._id,
        image: img,
        classTitle: classTitle,
        instructorName: instructorName,
        availableClasses: availableClasses,
        price: price,
        email: user.email,
      };
      fetch("https://summer-camp-server-pied-alpha.vercel.app/selectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class has been added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className="card w-96 bg-base-300 shadow-xl mb-10"
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{classTitle}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Available seats: {availableClasses}</p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleClass(singleClass)}
            className={`${
              availableClasses === 0 || isButtonDisabled
                ? "btn-disabled rounded-md p-2"
                : "btn btn-outline bg-slate-100 border-0 border-b-4 border-primary"
            }`}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
