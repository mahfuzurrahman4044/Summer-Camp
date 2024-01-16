import { FaUser, FaUserSecret } from "react-icons/fa";
import UseUsers from "../../UseQuery/UseUsers";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../UseAxiosSecure/UseAxiosSecure";

const Allusers = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: users = [], refetch } = UseUsers();

  const handleInstructor = (user) => {
    if (user.role === "instructor") {
      Swal.fire({
        position: "center",
        title: `${user.email} is already an instructor`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      fetch(`https://summer-camp-server-pied-alpha.vercel.app/allUsers/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.email} is an instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  const handleAdmin = (user) => {
    if (user.role === "admin") {
      Swal.fire({
        position: "center",
        title: `${user.email} is already an admin`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      fetch(`https://summer-camp-server-pied-alpha.vercel.app/allUsers/${user._id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.email} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  const handleDelete = (user) => {
    fetch(`https://summer-camp-server-pied-alpha.vercel.app/users/${user?.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.email} has been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  if (users.length === 0) {
    return <div>No users available</div>;
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500">
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-base-300">#</th>
            <th className="border border-base-300">User</th>
            <th className="border border-base-300">Make Instructor</th>
            <th className="border border-base-300">Make Admin</th>
            <th className="border border-base-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="border border-base-300">{index + 1}</td>
              <td className="border border-base-300">{user.email}</td>
              <td className="border border-base-300">
                <button
                  onClick={() => handleInstructor(user)}
                  className="btn btn-primary"
                >
                  {user.role === "instructor" ? <FaUser /> : "Make Instructor"}
                </button>
              </td>
              <td className="border border-base-300">
                <button
                  onClick={() => handleAdmin(user)}
                  className="btn btn-primary"
                >
                  {user.role === "admin" ? <FaUserSecret /> : "Make Admin"}
                </button>
              </td>
              <td className="border border-base-300">
                <button
                  onClick={() => handleDelete(user)}
                  className="btn bg-red-600"
                >
                  Delete{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
