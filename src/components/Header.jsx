import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

function Header() {
  const dis = useDispatch();
  const nav = useNavigate();
  const cart = useSelector((state) => state.cart);

  function fnLogout() {
    dis(removeUser());
    nav("/login");
  }

  function fnSeeCart() {
    nav("/cart");
  }

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">
          Shopping App
        </Link>
        <button onClick={fnSeeCart}>Cart - {cart?.length}</button>
        <div>
          <button
            onClick={() => fnLogout()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
