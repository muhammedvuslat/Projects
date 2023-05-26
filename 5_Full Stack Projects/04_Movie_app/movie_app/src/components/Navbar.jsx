import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import { userSignOut } from "../auth/firebase";

const Navbar = () => {
  const currentUser = { displayName: "Muhammed Vuslat" };
  // const currentUser = false;
  return (
    <>
      <nav className="w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-white shadow-lg navbar navbar-expand-lg fixed">
        <div className="container-fluid w-full flex items-center justify-between px-6">
          <Link className="text-l  pr-2 font-semibold" to="/">
            React Movie App
          </Link>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="flex items-center relative">
            {/* Icon */}
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
            )}
            <div className="dropdown relative">
              <span
                className="dropdown-toggle flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={currentUser?.photoURL || avatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt="user"
                  loading="lazy"
                />
              </span>
            </div>
          </div>
          <div className="flex items-center relative">
            <Link
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              to="/login"
            >
              Login
            </Link>
            <span
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              role="button"
              onClick={userSignOut}
            >
              Logout
            </span>
          </div>
        </div>
      </nav>
      <div className="h-[56px]"></div>
    </>
  );
};

export default Navbar;
