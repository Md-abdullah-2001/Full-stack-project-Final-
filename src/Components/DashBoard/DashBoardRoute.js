import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextApi } from "../../ContextApi/AuthContext";
import useAdmin from "../../hooks/useAdmin";
import NavBar from "../../Shared/NavBar/NavBar";

const DashBoardRoute = () => {
  const { user } = useContext(ContextApi);
  console.log(user);
  const [isAdmin] = useAdmin(user.email);
  return (
    <div>
      <NavBar></NavBar>

      <div className="drawer drawer-mobile">
        <input id="dash-drawar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dash-drawar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/doctors">Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardRoute;
