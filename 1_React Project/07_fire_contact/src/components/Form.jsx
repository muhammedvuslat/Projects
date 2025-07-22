import {
  UserCircleIcon,
  PhoneIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { setUser, writeUserData } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { userEditClear } from "../features/userEditSlice";
import Toastify from "../utils/toastify";

const Form = () => {
  const dispatch = useDispatch();
  const userEdit = useSelector((state) => state.userEdit);
  const [userCreate, setUserCreate] = useState(null);
  useEffect(() => {
    if (userEdit) {
      setUserCreate(userEdit);
    }
  }, [userEdit]);
  console.log(userCreate);

  const handleAdd = (e) => {
    e.preventDefault();
    if (userEdit) {
      setUser(userCreate);
      console.log("Boş değil kanka");
      dispatch(userEditClear());
      setUserCreate(null);
      Toastify("info", "Güncelleme Başarılı!");
    } else {
      console.log("Boş  kanka");
      writeUserData(userCreate);
      Toastify("success", "Kayıt Başarılı!");
      setUserCreate({});
    }
  };

  return (
    <div>
      <div>
        <p className="text-xl font-mono text-gray-900 dark:text-white mb-4 border-none  bg-white/20 dark:bg-black/70 backdrop-blur-md rounded-md p-5 text-center shadow-md">
          Add Contact
        </p>
      </div>
      <form
        onSubmit={(e) => handleAdd(e)}
        className="border-none  p-7 text-center dark:border-gray-700 border-gray-200  text-gray-900 dark:text-white mb-4   bg-white/20 dark:bg-black/50 backdrop-blur-md rounded-md  shadow-md"
      >
        <div className="flex mb-6">
          <span className="inline-flex items-center px-3 text-sm  border-none rounded-e-0  border-e-0 rounded-s-md   text-gray-900 dark:text-white    bg-white/20 dark:bg-black/10 backdrop-blur-md   shadow-md ">
            <UserCircleIcon className="h-6 w-6 text-white" />
          </span>
          <input
            type="text"
            id="input-group-1"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text"
            placeholder="Name"
            value={userCreate?.userName || ""}
            onChange={(e) =>
              setUserCreate({ ...userCreate, userName: e.target.value })
            }
          />
        </div>

        <div className="flex mb-6">
          <span className="inline-flex items-center px-3 text-sm  border-none rounded-e-0  border-e-0 rounded-s-md   text-gray-900 dark:text-white    bg-white/20 dark:bg-black/10 backdrop-blur-md   shadow-md">
            <PhoneIcon className="h-6 w-6 text-white" />
          </span>
          <input
            type="tel"
            id="phone_number"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone Number"
            value={userCreate?.phoneNumber || ""}
            onChange={(e) =>
              setUserCreate({ ...userCreate, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm  border-none rounded-e-0  border-e-0 rounded-s-md   text-gray-900 dark:text-white    bg-white/20 dark:bg-black/10 backdrop-blur-md   shadow-md">
            <UsersIcon className="h-6 w-6 text-white" />
          </span>
          <select
            id="gender"
            value={userCreate?.gender || ""}
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
            {userEdit ? "Save Change" : "Add User"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
