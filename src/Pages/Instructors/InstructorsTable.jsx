

const InstructorsTable = ({ instructor }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-32 h-32">
                                    <img src={instructor.img} />
                                </div>
                            </div>
                        </td>
                        <td className="uppercase font-semibold p-4">
                            {instructor.name}
                        </td>
                        <td>{instructor.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InstructorsTable;
