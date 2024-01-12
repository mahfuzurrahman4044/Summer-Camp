import { Link } from "react-router-dom";
import logo from "../../assets/Logo/vintage-summer-camp-logo-template-vector.jpg";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // console.log("Clicked");
    logOut();
  };
  return (
    <div className="opacity-90">
      <div className="navbar lg:px-16 lg:py-7 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content lg:mt-3 lg:p-2 shadow bg-gradient-to-r from-blue-500 to-cyan-500 opacity-90 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>

              {user ? (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      {/* <div className="userImg">
                        <img src={user.photoURL} alt="" />
                      </div> */}
                      <div>Profile</div>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log Out</button>
                  </li>
                </>
              ) : (
                <div>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="rounded-md font-semibold mx-1">
              <Link to="/">Home</Link>
            </li>
            <li className="rounded-md font-semibold mx-1">
              <Link to="/classes">Classes</Link>
            </li>
            <li className="rounded-md font-semibold mx-1">
              <Link to="/instructors">Instructors</Link>
            </li>
            {user ? (
              <>
                <li className="rounded-md font-semibold mx-1">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="rounded-md font-semibold mx-1">
                  <Link to="/profile">
                    <div>Profile</div>
                  </Link>
                </li>
                <li className="rounded-md font-semibold mx-1">
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              <ul className="flex">
                <li className="rounded-md font-semibold mx-1">
                  <Link to="/login">Log In</Link>
                </li>
                <li className="rounded-md font-semibold mx-1">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
