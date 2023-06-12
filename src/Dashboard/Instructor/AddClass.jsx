import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../UseAxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const imgbb = import.meta.env.VITE_imgbb;
  // console.log(imgbb);

  const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbb}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const name = data.classTitle;
    // const image = data.image;
    const instructorName = data.instructorName;
    const instructorEmail = data.instructorEmail;
    const availableSeats = data.availableSeats;
    const price = data.price;

    fetch(imgbbUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const imgUrl = data.data.display_url;
          // console.log(imgUrl);
          const classItems = {
            img: imgUrl,
            instructorName: instructorName,
            availableClasses: parseFloat(availableSeats),
            price: parseFloat(price),
            type: "normal",
            classTitle: name,
            instructorEmail: instructorEmail,
          };
          // console.log(classItems);
          axiosSecure.post("/insertClass", classItems).then((data) => {
            // console.log(data.data);

            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class has been added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    // reset();
    // console.log(
    //   name,
    //   image,
    //   instructorName,
    //   instructorEmail,
    //   availableSeats,
    //   price
    // );
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Class</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  {...register("classTitle", { required: true })}
                  placeholder="Class Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  placeholder="Image"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  {...register("instructorName")}
                  value={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  {...register("instructorEmail")}
                  value={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available seats</span>
                </label>
                <input
                  type="text"
                  {...register("availableSeats", { required: true })}
                  placeholder="Available seats"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  {...register("price", { required: true })}
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
