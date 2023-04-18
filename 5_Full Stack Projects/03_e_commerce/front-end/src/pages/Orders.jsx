import React, { useEffect, useState } from "react";
import OrderCards from "../components/OrderCards";
import useProductCalls from "../hooks/useProductCalls";

const Orders = () => {
  const { getAllOrderItems } = useProductCalls();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getAllOrderItems(setOrderItems);
  }, []);

  const handleOrder = () => {
    // address todo
    // order todo
  };

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
      <div>
        <button
          className="text-white bg-[rgb(31,41,55)] hover:bg-[rgb(112,133,173)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"
          onClick={handleOrder}
        >
          ORDER
        </button>
      </div>
    </div>
  );
};

export default Orders;
