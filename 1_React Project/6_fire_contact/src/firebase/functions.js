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

export const writeUserData = ({ iname, itel, igender }) => {
  const db = getDatabase(firebase);
  push(ref(db, "users/"), {
    userName: iname,
    phoneNumber: itel,
    gender: igender,
  });
};

export const setUser = ({ iname, itel, igender, userID }) => {
  const db = getDatabase(firebase);
  set(ref(db, "users/" + userID), {
    username: iname,
    phoneNumber: itel,
    gender: igender,
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
