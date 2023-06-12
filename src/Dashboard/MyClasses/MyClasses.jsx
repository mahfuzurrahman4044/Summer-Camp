import { FaTrash, FaWallet } from "react-icons/fa";
import UseQuery from "../../UseQuery/UseQuery";
import Swal from "sweetalert2";

const MyClasses = () => {
    const [refetch, classes] = UseQuery();
    // console.log(classes);

    const selectedClass = classes.filter(singleClass => !singleClass?.paymentStatus);
    // console.log(selectedClass);
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
                fetch(`https://summer-camp-server-blue.vercel.app/selectedClass/${id}`, {
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

    // const handlePay = (singleClass) => {
    //     if (singleClass.paymentStatus === "Paid") {
    //         Swal.fire({
    //             title: 'Already Paid',
    //             showClass: {
    //                 popup: 'animate__animated animate__fadeInDown'
    //             },
    //             hideClass: {
    //                 popup: 'animate__animated animate__fadeOutUp'
    //             }
    //         });
    //     } else {
    //         Swal.fire({
    //             title: 'Are you sure?',
    //             text: "You won't be able to revert this!",
    //             icon: 'success',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'Pay'
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 fetch(`https://summer-camp-server-blue.vercel.app/selectedClass/${singleClass._id}`, {
    //                     method: 'PUT'
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         if (data.message === "Payment confirmed and available class count reduced") {
    //                             Swal.fire(
    //                                 'Paid',
    //                                 'The payment has been confirmed and the available class count has been reduced.',
    //                                 'success'
    //                             );
    //                             refetch();
    //                         } else if (data.message === "Payment confirmed, but failed to update the available class count") {
    //                             Swal.fire(
    //                                 'Paid',
    //                                 'The payment has been confirmed, but failed to update the available class count.',
    //                                 'success'
    //                             );
    //                             refetch();
    //                         } else if (data.message === "Payment is already confirmed") {
    //                             Swal.fire(
    //                                 'Payment Already Confirmed',
    //                                 'The payment for this class has already been confirmed.',
    //                                 'info'
    //                             );
    //                         } else {
    //                             Swal.fire(
    //                                 'Payment Failed',
    //                                 'Failed to update the payment confirmation.',
    //                                 'error'
    //                             );
    //                         }
    //                     });
    //             }
    //         });
    //     }
    // };


    if (selectedClass.length === 0) {
        return <div>No classes available</div>;
    }

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class</th>
                        <th>Instructor</th>
                        <th>Available seats</th>
                        <th>Price</th>
                        <th>Pay</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClass.map((singleClass, index) => (
                        <tr key={singleClass._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{singleClass.classTitle}</td>
                            <td>{singleClass.instructorName}</td>
                            <td>{singleClass.availableClasses}</td>
                            <td>${singleClass.price}</td>
                            <td>
                                <button
                                    // onClick={() => handlePay(singleClass)}
                                    className="btn bg-red-600 text-white"
                                >
                                    {singleClass.paymentStatus == "Paid" ? "Paid" : <FaWallet />}
                                </button>
                            </td>
                            <td>
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