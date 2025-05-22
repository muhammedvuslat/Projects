import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import firebase from "./firebase";
import { useDispatch } from "react-redux";
import { getUser } from "../features/userSlice";
import { useEffect } from "react";

export const writeUserData = ({ userName, phoneNumber, gender }) => {
  const db = getDatabase(firebase);
  push(ref(db, "users/"), {
    userName: userName,
    phoneNumber: phoneNumber,
    gender: gender,
  });
};

export const setUser = ({ id, userName, gender, phoneNumber }) => {
  const db = getDatabase(firebase);
  set(ref(db, "users/" + id), {
    userName: userName,
    phoneNumber: phoneNumber,
    gender: gender,
  });
};

export const useGetUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const db = getDatabase(firebase);
    const usersRef = ref(db, "users/");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const usersArr = [];

      for (let id in data) {
        usersArr.push({ id, ...data[id] });
      }
      dispatch(getUser({ user: usersArr }));
    });

    return () => {};
  }, [dispatch]);
};

export const delUser = (id) => {
  const db = getDatabase(firebase);
  remove(ref(db, "users/" + id));
};
