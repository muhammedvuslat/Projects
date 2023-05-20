import { useState } from "react";
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
  return (
    <>
      <nav className="w-full flex flex-wrap items-center justify-between py-3 bg-white dark:bg-gray-900 dark:text-white shadow-lg navbar navbar-expand-lg fixed-top text-green-600  ">
        <div className="container-fluid w-full flex items-center justify-between px-6  ">
          <Link rel="stylesheet" to="/">
            Movie App
            <button className="ml-5 " onClick={logClick}>
              LOG
            </button>
          </Link>
          <div className="flex items-center relative">
            {currentUser.validation && (
              <h5 className="mr-2 capitalize">{currentUser?.name}</h5>
            )}
            <div className=" dropdown relative ">
              <span
                className="dropdown-toggle flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
              <ul></ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
