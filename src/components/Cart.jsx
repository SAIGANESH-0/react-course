import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setcartitems] = useState([]);
  const carts = useSelector((state) => state.cart);
  const disp = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    setcartitems(carts);
  }, []);
  return (
    <div className="flex flex-col items-center bg-white gap-8 p-10 text-black text-sm">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div key={item?.id} className="flex justify-between items-center">
            <div className="flex gap-4">
              <img
                src={item?.thumbnail}
                alt={item?.title}
                className="rounded-md h-24"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{item?.title}</h1>
                <p className="text-gray-600">{item?.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add logic to calculate total and show checkout button if cart is not empty */}
      {cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${}</h1>
          <button
            className="px-4 py-2 my-3 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              nav("/pay");
            }}
          >
            Buy cart
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              disp(removeAll());
              setcartitems([]);
            }}
          >
            Clear cart
          </button>
        </div>
      ) : (
        <h1 className="text-lg font-bold">Your cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;
