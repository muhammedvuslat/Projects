import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useAxios, { axiosPublic } from "./useAxios";

const useProductCalls = () => {
  const navigate = useNavigate();
  const { axiosWithToken } = useAxios();

  const getAllItems = async (setItems) => {
    try {
      const { data } = await axiosPublic.get("items/");
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addOrderItem = async (itemData) => {
    try {
      const { data } = await axiosWithToken.post("orderitems/", itemData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllOrderItems = async (setOrderItems) => {
    try {
      const { data } = await axiosWithToken.get("orderitems/");
      setOrderItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrderItems = async (id, info) => {
    try {
      const { data } = await axiosWithToken.patch(`orderitems/${id}/`, info);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrderItems = async (id, setOrderItems) => {
    try {
      const { data } = await axiosWithToken.delete(`orderitems/${id}/`);
      getAllOrderItems(setOrderItems);
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async (orderInfo) => {
    try {
      const { data } = await axiosWithToken.post(`order-create/`, orderInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrders = async (setAllOrders) => {
    try {
      const { data } = await axiosWithToken.get(`orders-list/`);
      setAllOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllItems,
    addOrderItem,
    getAllOrderItems,
    updateOrderItems,
    deleteOrderItems,
    createOrder,
    getOrders,
  };
};

export default useProductCalls;
