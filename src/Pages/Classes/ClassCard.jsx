

const ClassCard = ({ singleClass }) => {
    const { img, classTitle, instructorName, availableClasses, price } = singleClass;
    return (
        <div className={`${availableClasses===0?"card w-96 bg-red-600 shadow-xl mb-3":"card w-96 bg-base-100 shadow-xl mb-3"}`}>
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{classTitle}</h2>
                <p>Instructor: {instructorName}</p>
                <p>Available seats: {availableClasses}</p>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button className={`${availableClasses === 0 ? "btn-disabled rounded-md p-2" : "btn btn-outline bg-slate-100 border-0 border-b-4 border-primary"}`}>Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
