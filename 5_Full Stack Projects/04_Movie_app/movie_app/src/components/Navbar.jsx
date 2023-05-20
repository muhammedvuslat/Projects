import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/icons/avatar.png";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState({
    validation: true,
    name: "Muhammed",
    surname: "Çevik",
    photoURL: "https://icon-library.com/images/scholar-icon/scholar-icon-6.jpg",
  });
  const logClick = (e) => {
    e.preventDefault();
    setCurrentUser({ ...currentUser, validation: !currentUser.validation });
    console.log(currentUser.validation);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="w-full flex flex-wrap items-center justify-between py-3 bg-white dark:bg-gray-900 dark:text-white shadow-lg navbar navbar-expand-lg fixed-top text-green-600  ">
        <div className="container-fluid w-full flex items-center justify-between px-6  ">
          <Link rel="stylesheet" to="/">
            Movie App
          </Link>
          <div className="flex items-center relative">
            {/* Icon */}
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser?.name}</h5>
            )}
            <div className="dropdown relative">
              <span
                className="dropdown-toggle flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                <img
                  src={currentUser?.photoURL || Avatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt="user"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </span>
              <ul
                className={`dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 ${
                  isDropdownOpen ? "show" : ""
                }`}
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <span
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    role="button"
                    onClick={() => logClick()}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
