import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  profileSuccess,
  getAddressSuccess,
} from "../features/authSlice";
import useAxios, { axiosPublic } from "./useAxios";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosWithToken } = useAxios();
  const { currentUser } = useSelector((state) => state.auth);

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

  const getProfile = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/users/profile/${id}/`);
      dispatch(profileSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const updateProfile = async (id, profileInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(
        `/users/profile/${id}/`,
        profileInfo
      );
      getProfile(id);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const getAddress = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`address/`);
      dispatch(getAddressSuccess(data[0]));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const updateAddress = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(`address/${info.id}/`, info);
      getAddress();
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const postAddress = async (info) => {
    info["user"] = currentUser.id;
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`address/`, info);
      getAddress();
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return {
    register,
    login,
    logout,
    getProfile,
    updateProfile,
    getAddress,
    updateAddress,
    postAddress,
  };
};

export default useAuthCalls;
