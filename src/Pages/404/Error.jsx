import { Link } from "react-router-dom";
import "./Error.css"
import img from "../../assets/Error/how-to-find-and-fix-404-errors-in-wordpress.png.webp"


const Error = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className='error flex justify-center pt-10'>
                <img className="rounded-md" src={img} alt="" />
            </div>
            <div className='error flex justify-center py-5'>
                <Link className="btn border border-b-2 outline border-primary border-0" to="/">Home</Link>
            </div>
        </div>
    );
};

export default Error;