import { FaUser, FaUserSecret } from "react-icons/fa";
import UseUsers from "../../UseQuery/UseUsers";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../UseAxiosSecure/UseAxiosSecure";

const Allusers = () => {
  const [axiosSecure]=UseAxiosSecure();
  const { data: users = [], refetch } = UseUsers();

  const handleInstructor = (user) => {
    // console.log(user);
    if (user.role == "instructor") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${user.email} is already instructor`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      fetch(`https://summer-camp-server-mahfuzurrahman4044.vercel.app/allUsers/${user._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };

  const handleAdmin = (user) => {
    // console.log(user);
    if (user.role == "admin") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${user.email} is already admin`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      fetch(`https://summer-camp-server-mahfuzurrahman4044.vercel.app/allUsers/${user._id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };

  if (users.length === 0) {
    return <div>No classes available</div>;
  }

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Make Instructor</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleInstructor(user)}
                  className="btn btn-ghost bg-violet-300"
                >
                  {user?.role === "instructor" ? "Instructor" : <FaUser />}
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleAdmin(user)}
                  className="btn btn-ghost bg-violet-300"
                >
                  {user?.role === "admin" ? "Admin" : <FaUserSecret />}
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
