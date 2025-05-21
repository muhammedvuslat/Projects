import {
  UserCircleIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Form = () => {
  const [userCreate, setUserCreate] = useState({
    gender: "Male",
    id: "-OQlURJMYr3EsVNQv1nt",
    phoneNumber: 101231512313,
    userName: "Test asssss",
  });
  console.log(userCreate);

  return (
    <div>
      <div>
        <p className="text-xl font-mono dark:text-gray-400 text-gray-900 mb-4  border-none bg-gray-50  dark:bg-gray-800 rounded-md p-5 text-center ">
          Add Contact
        </p>
      </div>
      <form className="border-none bg-gray-50  dark:bg-gray-800 rounded-md p-7 text-center">
        <div className="flex mb-6">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <UserCircleIcon className="h-6 w-6 text-gray-500" />
          </span>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            value={userCreate.userName}
            onChange={(e) =>
              setUserCreate({ ...userCreate, userName: e.target.value })
            }
          />
        </div>

        <div className="flex mb-6">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <PhoneIcon className="h-6 w-6 text-gray-500" />
          </span>
          <input
            type="tel"
            id="phone_number"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone Number"
            value={userCreate.phoneNumber}
            onChange={(e) =>
              setUserCreate({ ...userCreate, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <UsersIcon className="h-6 w-6 text-gray-500" />
          </span>
          <select
            id="gender"
            value={userCreate.gender}
            onChange={(e) =>
              setUserCreate({ ...userCreate, gender: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              disabled
              hidden
              value=""
              className="text-gray-900 dark:text-white"
            >
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button className=" mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Green to blue
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
