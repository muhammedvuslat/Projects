import { useDispatch, useSelector } from "react-redux";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";

import { useGetUser, delUser } from "../utils/functions";
import { userEditFetch } from "../features/userEditSlice";

const List = () => {
  const dispatch = useDispatch();

  useGetUser();

  const { user } = useSelector((state) => state.userList);

  const handleSet = (item) => {
    dispatch(userEditFetch(item));
    console.log(item.id);
  };

  console.log(user);

  return (
    <div>
      {/* <div>
        <p className="text-xl font-mono dark:text-gray-400 text-gray-900 mb-4  border-none bg-gray-50  dark:bg-gray-800 rounded-md p-5 text-center">
          Contact List
        </p>
      </div> */}
      <div>
        <p className="text-xl font-mono text-gray-900 dark:text-white mb-4 border-none  bg-white/20 dark:bg-black/70 backdrop-blur-md rounded-md p-5 text-center shadow-md">
          Contact List
        </p>
      </div>

      <div className="relative overflow-x-auto border-none rounded-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
          <thead className="text-xs  uppercase  text-gray-900 dark:text-white mb-4 border-none  bg-white/20 dark:bg-black/70 backdrop-blur-md rounded-md p-5 text-center shadow-md">
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
              <tbody
                key={id}
                className=" text-start bg-white/20 dark:bg-black/50 backdrop-blur-md shadow-md "
              >
                <tr className=" text-gray-900 dark:text-white mb-4 p-5 text-center ">
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
                  <td
                    onClick={() => handleSet(item)}
                    className="px-6 py-4 cursor-pointer "
                  >
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
