import { Link, Outlet } from "react-router-dom";
import {
  FaBook,
  FaBookmark,
  FaCartPlus,
  FaHome,
  FaPaypal,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import UseQuery from "../UseQuery/UseQuery";
import UseAdmin from "../UseQuery/UseAdmin";

const Dashboard = () => {
  const [classes] = UseQuery();
  // const isAdmin = true;
  const [isAdmin] = UseAdmin();
  return (
    <div>
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
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {isAdmin ? (
            <>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content bg-purple-50">
                {/* Sidebar content here */}
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
            </>
          ) : (
            <>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content bg-[#D1A054]">
                {/* Sidebar content here */}
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
                <li>
                  <Link to="/dashboard/paymentHistory">
                    <FaPaypal />
                    Payment History
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
                    <FaCartPlus></FaCartPlus> Classes
                  </Link>
                </li>
                <li>
                  <Link to="/instructors">
                    <FaUser></FaUser> Instructors
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
