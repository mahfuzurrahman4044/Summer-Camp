import { useContext, useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

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

  // Sort by Price Option ---------------------------------------------------------------------------------------------------
  const [sortBy, setSortBy] = useState(null); // State to hold sorting criterion
  const [sortedClasses, setSortedClasses] = useState([]);

  const handleSort = (criteria) => {
    setSortBy(criteria);
    let sorted;
    if (criteria === 'low') {
      sorted = approvedClasses.slice().sort((a, b) => a.price - b.price);
    } else if (criteria === 'high') {
      sorted = approvedClasses.slice().sort((a, b) => b.price - a.price);
    }
    setSortedClasses(sorted);
  };


  // Search Field ---------------------------------------------------------------------------------------------
  const [searchText, setSearchText] = useState(null);
  // console.log(searchText);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchedText = event.target.class.value.trim().toLowerCase();
    setSearchText(searchedText);
  };

  const filteredClasses = searchText
    ? approvedClasses.filter((approvedClass) =>
        approvedClass.classTitle.toLowerCase().includes(searchText)
      )
    : [];
  // console.log(filteredClasses);

  // User Role System ----------------------------------------------------------------------------------
  const { user } = useContext(AuthContext);
  // console.log(user);

  const isAdmin = user?.role == "admin";
  // console.log(instructorName);
  const isInstructer = user?.role == "instructor";
  // console.log(isInstructer);

  const isUserLoggedIn = !!user;
  const isButtonDisabled = isUserLoggedIn && (isAdmin || isInstructer);

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  // Select Class -------------------------------------------------------------------------------------
  const handleClass = (items) => {
    if (user && user.email) {
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
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div>
        {/* Search Method --------------------------------------------------------------------------------- */}
        <div className="hero py-5">
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg">
              <form
                className="card-body bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-lg"
                onSubmit={handleSearch}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class</span>
                  </label>
                  <input
                    type="text"
                    placeholder="class"
                    className="input input-bordered"
                    name="class"
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sort by Price Option ----------------------------------------------------------------------------------- */}
      <div className="flex justify-end pr-24 py-4">
        <select
          className="rounded-md p-2 border border-gray-300"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Class Card ----------------------------------------------------------------------------------------*/}
      <div>
        {searchText && filteredClasses.length > 0 ? (
          <div className="grid lg:grid-cols-3 lg:ps-20 ps-16 lg:py-5 ">
            {filteredClasses.map((filteredClass) => (
              <div
                key={filteredClass._id}
                className="card lg:w-96 mb-10 bg-gradient-to-r from-violet-600 to-fuchsia-400 shadow-lg"
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={filteredClass.img}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{filteredClass.classTitle}</h2>
                  <p>Instructor: {filteredClass.instructorName}</p>
                  <p>Available seats: {filteredClass.availableClasses}</p>
                  <p>Price: ${filteredClass.price}</p>
                  <div className="card-actions">
                    <button
                      onClick={() => handleClass(filteredClass)}
                      className={`${
                        filteredClass.availableClasses === 0 || isButtonDisabled
                          ? "btn-disabled rounded-md p-2"
                          : "btn btn-primary p-2 rounded-md"
                      }`}
                    >
                      Select Class
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="grid lg:grid-cols-3 lg:ps-20 ps-16 lg:py-5 ">
              {sortBy
                ? sortedClasses.map((singleClass) => (
                    <ClassCard
                      key={singleClass._id}
                      singleClass={singleClass}
                    ></ClassCard>
                  ))
                : approvedClasses.map((singleClass) => (
                    <ClassCard
                      key={singleClass._id}
                      singleClass={singleClass}
                    ></ClassCard>
                  ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classes;
