import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";

function ProductDetail() {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const dis = useDispatch();

  async function fetchData() {
    const Data = await fetch("https://dummyjson.com/products/" + id);
    const Json = await Data?.json();
    setproduct(Json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fnCart(p) {
    dis(addItem(p));
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
      <img
        className="w-full md:w-1/2 object-cover rounded-lg"
        src={product?.thumbnail}
        alt={product?.title}
      />
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-gray-900 font-bold text-2xl mb-2">
          {product?.title}
        </h1>
        <h2 className="text-gray-600 text-xl mb-2">{product?.brand}</h2>
        <p className="text-gray-700 mb-2">{product?.description}</p>
        <p className="text-gray-900 font-bold text-xl mb-2">{`$${product?.price}`}</p>
        <p className="text-gray-600 mb-2">{`Discount: ${product?.discountPercentage}%`}</p>
        <p className="text-gray-600 mb-2">{`Rating: ${product?.rating}`}</p>
        <p className="text-gray-600 mb-2">{`Stock: ${product?.stock}`}</p>
        <button
          onClick={() => fnCart(product)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
