import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateInfo, verifyEmail } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data.phone);

    if (data.password !== data.confirmPassword) {
      setError("Password doesn't matched");
    } else {
      createUser(data.email, data.password).then((res) => {
        console.log(res.user);
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account has been created",
          showConfirmButton: false,
          timer: 1500,
        });
        updateInfo(data.name, data.photoURL, data.phone)
          .then(() => {
            console.log("User Updated");
            const user = {
              photo: data.photoURL,
              name: data.name,
              phoneNumber: data.phone,
              email: data.email,
            };
            console.log(data.name, data.email);
            fetch("https://summer-camp-server-pied-alpha.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
        verifyEmail(res.user).then((result) => {
          console.log(result);
          alert("Please verify the email");
        });
        navigate("/");
      });

      setError("");
    }
  };

  return (
    <div className="text-center">
      <div className="hero min-h-screen bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold">Sign Up!</h1> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-600 to-cyan-400">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  placeholder="phone"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be more than 6 character
                  </p>
                )}
                {errors.confirmPassword?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 character
                  </p>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <p className="text-red-600">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className=" btn btn-primary p-2 rounded-md">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
