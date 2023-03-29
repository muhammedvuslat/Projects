import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import useAxios, { axiosPublic } from "./useAxios";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosWithToken } = useAxios();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("users/register/", userInfo);
      dispatch(registerSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/users/auth/logout/");
      dispatch(logoutSuccess());
      navigate("/login");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { register, login, logout };
};

export default useAuthCalls;
