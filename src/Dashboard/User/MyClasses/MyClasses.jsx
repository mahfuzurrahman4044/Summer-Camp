import { FaTrash, FaWallet } from "react-icons/fa";
import UseQuery from "../../../UseQuery/UseQuery";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [refetch, classes] = UseQuery();

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://summer-camp-server-pied-alpha.vercel.app/selectedClass/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch();
                    }
                })
        }
    })
};

  if (classes.length === 0) {
    return <div>No classes available</div>;
  }

  return (
    <div className="">
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={3}>
              <div className="mb-4 text-center">Total Items: {classes.length}</div>
            </th>
            <th colSpan={3}>
              <div className="mb-4 text-center">
                Total Price: $
                {classes.reduce((sum, item) => item.price + sum, 0)}
              </div>
            </th>
            <th colSpan={2} className="text-center">
              <Link to="/dashboard/payment">
                <div className="btn btn-primary mb-4">
                  <FaWallet></FaWallet>Pay
                </div>
              </Link>
            </th>
          </tr>
          <tr className="">
            <th className="border border-base-300 text-center">#</th>
            <th className="border border-base-300 text-center">Image</th>
            <th className="border border-base-300 text-center">Class</th>
            <th className="border border-base-300 text-center">Instructor</th>
            <th className="border border-base-300 text-center">Available seats</th>
            <th className="border border-base-300 text-center">Price</th>
            <th className="border border-base-300 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((singleClass, index) => (
            <tr key={singleClass._id}>
              <td className="border border-base-300 text-center">{index + 1}</td>
              <td className="border border-base-300 text-center">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={singleClass.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td className="border border-base-300 text-center">
                {singleClass.classTitle}
              </td>
              <td className="border border-base-300 text-center">
                {singleClass.instructorName}
              </td>
              <td className="border border-base-300 text-center">
                {singleClass.availableClasses}
              </td>
              <td className="border border-base-300 text-center">${singleClass.price}</td>
              <td className="border border-base-300 text-center">
                <button
                  onClick={() => handleDelete(singleClass._id)}
                  className="btn bg-red-600 text-white"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
