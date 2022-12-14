import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextApi } from "../../ContextApi/AuthContext";

const NavBar = () => {
  const { user, logOut } = useContext(ContextApi);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };
  const navLink = (
    <React.Fragment>
      <li className="text-[16px] font-semibold ">
        <Link to="/">Home</Link>
      </li>
      <li className="text-[16px] font-semibold ">
        <Link to="/appointment">Appointment</Link>
      </li>

      <li className="text-[16px] font-semibold ">
        <Link to="/">About</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="text-[16px] font-semibold ">
            <Link to="/dashboard">Reviews</Link>
          </li>
          <li className="text-[16px] font-semibold ">
            <button onClick={handleLogout}>LogOut</button>
          </li>
        </>
      ) : (
        <>
          <li className="text-[16px] font-semibold ">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-[16px] font-semibold ">
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-sky-300 flex justify-between">
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
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl ">
          Doctor's Farm
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLink}</ul>
      </div>
      <label
        htmlFor="dash-drawar"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
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
    </div>
  );
};

export default NavBar;
