import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfileUpdateModal from "../components/ProfileUpdateModal";

const Profile = () => {
  const { currentUser, avatar, purse } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-20 flex flex-col justify-between gap-8 md:flex-row">
      <div className="flex flex-col justify-center items-center">
        <img className="w-[250px]" src={avatar} alt="avatar" />

        <h1 className="text-2xl">
          {currentUser.first_name} {currentUser.last_name}
        </h1>
        <p className="text-lg">{purse}$</p>

        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-200"
          onClick={() => setShowModal(true)}
        >
          UPDATE
        </button>
        {showModal && <ProfileUpdateModal setShowModal={setShowModal} />}
      </div>

      <div className="flex flex-col justify-center items-center"></div>
      <p>Sipariş Bilgileri Olacak</p>
    </div>
  );
};

export default Profile;
