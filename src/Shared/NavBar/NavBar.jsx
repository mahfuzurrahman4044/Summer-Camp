import { Link } from "react-router-dom";
import logo from "../../assets/Logo/vintage-summer-camp-logo-template-vector.jpg"
import "./NavBar.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        // console.log("Clicked");
        logOut()
    }
    return (
        <div className="">
            <div className="navbar bg-base-200 p-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li>
                                <Link to="/classes">Classes</Link>
                            </li>
                            <li><Link to="/instructors">Instructors</Link></li>

                            {
                                user ? <><li><Link to="/dashboard/myClasses">Dashboard</Link></li>
                                    <li><Link><div className="userImg"><img src={user.photoURL} alt="" /></div></Link></li>
                                    <li><button onClick={handleLogOut}>Log Out</button></li></>
                                    : <li><Link to="/login">Login</Link></li>
                            }
                        </ul>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className=""><Link>Home</Link></li>
                        <li className=""><Link to="/classes">Classes</Link></li>
                        <li className=""><Link to="/instructors">Instructors</Link></li>
                        {
                            user ? <><li><Link to="/dashboard/myClasses">Dashboard</Link></li>
                                <li><Link><div className="userImg"><img src={user.photoURL} alt="" /></div></Link></li>
                                <li><button onClick={handleLogOut}>Log Out</button></li></>
                                : <li><Link to="/login">Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
