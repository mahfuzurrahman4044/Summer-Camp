import UseQuery from "../../UseQuery/UseQuery";

const EnrolledClasses = () => {
    const [refetch, classes] = UseQuery();
    // console.log(classes);
    const enrolledClasses = classes?.filter(singleClass => singleClass?.paymentStatus == "Paid");
    // console.log(enrolledClasses);
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
                    </tr>
                </thead>
                <tbody>
                    {enrolledClasses.map((singleClass, index) => (
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

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrolledClasses;
