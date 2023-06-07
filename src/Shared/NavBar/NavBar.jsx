import { Link } from "react-router-dom";
import logo from "../../assets/Logo/vintage-summer-camp-logo-template-vector.jpg"
import "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-200 p-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>Instructors</Link></li>
                            <li>
                                <Link>Classes</Link>
                            </li>
                            <li><Link>Dashboard</Link></li>
                            <li><Link>Profile</Link></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li>
                            <Link>Classes</Link>
                        </li>
                        <li><Link>Dashboard</Link></li>
                        <li><Link>Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
