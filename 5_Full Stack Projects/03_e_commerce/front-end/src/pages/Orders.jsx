import React, { useEffect, useState } from "react";
import OrderCards from "../components/OrderCards";
import useProductCalls from "../hooks/useProductCalls";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Orders = () => {
  const { getAllOrderItems, createOrder } = useProductCalls();
  const { updateProfile } = useAuthCalls();
  const [orderItems, setOrderItems] = useState([]);
  const { address, currentUser, avatar, purse } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    getAllOrderItems(setOrderItems);
  }, []);

  const [orderInfo, setOrderInfo] = useState({
    user_id: currentUser.id,
    items: null,
    address_id: address.id,
    ordered: true,
    payment: true,
  });

  useEffect(() => {
    setOrderInfo({ ...orderInfo, items: orderItems.map((item) => item.id) });
  }, [orderItems]);

  const handleOrder = async () => {
    const orderTotalPrice = orderItems?.reduce(
      (acc, val) => val.item_total_price + acc,
      0
    );

    if (orderTotalPrice <= purse) {
      updateProfile(currentUser.id, {
        avatar: avatar,
        purse: purse - orderTotalPrice,
      });

      await createOrder(orderInfo);
      setOrderItems([]);
    } else {
      alert("You don't have enough money in your purse");
    }
  };

  // console.log(orderInfo);

  return (
    <div className="pt-20 text-center p-8">
      <p className="font-bold text-2xl mb-4 text-gray-700">My Orders</p>
      {orderItems.length > 0 ? (
        orderItems?.map((item) => (
          <OrderCards key={item.id} item={item} setOrderItems={setOrderItems} />
        ))
      ) : (
        <p className="font-bold text-red-500">You Have Nothing In Your Cart</p>
      )}

      {orderItems.length > 0 && (
        <p>
          Total :{" "}
          {orderItems?.reduce((acc, val) => val.item_total_price + acc, 0)}
        </p>
      )}

      <div>
        <div className="mb-2">
          <h4>Order Address :</h4>
          {address ? (
            <p>
              {address?.address} {address?.city} {address?.country}
            </p>
          ) : (
            <button
              className="text-white bg-[rgb(31,41,55)] hover:bg-[rgb(112,133,173)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"
              onClick={() => navigate("/profile")}
            >
              Add Address
            </button>
          )}
        </div>

        <button
          className="text-white bg-[rgb(31,41,55)] hover:bg-[rgb(112,133,173)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"
          disabled={orderItems.length < 1 && true}
          onClick={handleOrder}
        >
          ORDER
        </button>
      </div>
    </div>
  );
};

export default Orders;
