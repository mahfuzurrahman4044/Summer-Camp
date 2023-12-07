import { Link, Outlet } from "react-router-dom";
import {
  FaBook,
  FaBookmark,
  FaCartPlus,
  FaHome,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import UseAdmin from "../UseQuery/UseAdmin";
import UseInstructer from "../UseQuery/UseInstructer";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();
  console.log(isAdmin);
  const [isInstructor] = UseInstructer();
  console.log(isInstructor);

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {isAdmin && !isInstructor ? (
            <ul className="menu p-4 w-80 h-full text-base-content bg-gradient-to-r from-violet-500 to-fuchsia-500">
              {/* Sidebar content for admin */}
              <li>
                <Link to="/dashboard/manageClasses">
                  <FaBook></FaBook>Manage Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allUsers">
                  <FaUser />
                  Manage Users
                </Link>
              </li>
              <div className="divider"></div>
              <li>
                <Link to="/">
                  <FaHome></FaHome>Home
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <FaBook></FaBook> Classes
                </Link>
              </li>
              <li>
                <Link to="/instructors">
                  <FaUser></FaUser> Instructors
                </Link>
              </li>
            </ul>
          ) : isInstructor && !isAdmin ? (
            <ul className="menu p-4 w-80 h-full text-base-content bg-gradient-to-r from-violet-500 to-fuchsia-500">
              {/* Sidebar content for instructor */}
              <li>
                <Link to="/dashboard/addClass">
                  <FaBook></FaBook>Add Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageClass">
                  <FaBookmark />
                  My Class
                </Link>
              </li>
              <div className="divider"></div>
              <li>
                <Link to="/">
                  <FaHome></FaHome>Home
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <FaBook></FaBook> Classes
                </Link>
              </li>
              <li>
                <Link to="/instructors">
                  <FaUser /> Instructors
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="menu p-4 w-80 h-full text-base-content bg-gradient-to-r from-violet-500 to-fuchsia-500">
              {/* Sidebar content for regular user */}
              <li>
                <Link to="/dashboard/myClasses">
                  <FaBookmark></FaBookmark>Selected Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledClasses">
                  <FaWallet></FaWallet>My Enrolled Classes
                </Link>
              </li>
              {/* <li>
                <Link to="/dashboard/paymentHistory">
                  <FaPaypal />
                  Payment History
                </Link>
              </li> */}
              <div className="divider"></div>
              <li>
                <Link to="/">
                  <FaHome></FaHome>Home
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <FaCartPlus></FaCartPlus> Classes
                </Link>
              </li>
              <li>
                <Link to="/instructors">
                  <FaUser></FaUser> Instructors
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
