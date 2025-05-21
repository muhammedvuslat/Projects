import { useSelector } from "react-redux";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

import {
  useGetUser,
  delUser,
  // getUser,
  // setUser,
  writeUserData,
} from "../firebase/functions";

const List = () => {
  const info = {
    iname: "Merhabab",
    itel: 91231231512313,
    igender: "Erkek ",
    userID: "-OQmIU3k_sdDiZJFDyvs",
  };

  const handleEkle = () => {
    writeUserData(info);
  };
  // const handleSet = () => {
  //   setUser(info);
  // };
  // const handleGet = () => {
  //   console.log(useGetUser());
  // };
  // const handleDel = () => {
  //   delUser(info);
  // };
  useGetUser();

  const { user } = useSelector((state) => state.userList);

  // const { iname, itel, igender, userID } = user;
  console.log(user);

  return (
    <div>
      <div>
        <p className="text-xl font-mono dark:text-gray-400 text-gray-900 mb-4  border-none bg-gray-50  dark:bg-gray-800 rounded-md p-5 text-center">
          Contact List
        </p>
        <button className="bg-lime-500" onClick={() => handleEkle()}>
          Ekle Test
        </button>
        {/*
        <button className="bg-purple-800" onClick={() => handleSet()}>
          Set Test
        </button>*/}
        {/* <button className="bg-pink-800" onClick={() => handleGet()}>
          Get test
        </button> */}
        {/*
        <button className="bg-yellow-500" onClick={() => handleDel()}>
          Sil kullanıcı
        </button> */}
      </div>
      <div className="relative overflow-x-auto border-none rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          {user?.map((item) => {
            const { id, gender, phoneNumber, userName } = item;
            return (
              <tbody key={id} className=" text-center">
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {userName}
                  </th>
                  <td className="px-6 py-4">{phoneNumber}</td>
                  <td className="px-6 py-4">{gender}</td>
                  <td
                    className="px-8 py-4 cursor-pointer"
                    onClick={() => delUser(id)}
                  >
                    <XCircleIcon className="h-6 w-6 text-red-500 " />
                  </td>
                  <td className="px-6 py-4 cursor-pointer ">
                    <PencilSquareIcon className="h-6 w-6 text-green-600" />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default List;
