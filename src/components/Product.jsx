import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navi = useNavigate();
  function fnHandleClick(id) {
    navi("/product/" + id);
  }
  return (
    <div
      onClick={() => fnHandleClick(product?.id)}
      className="max-w-xs cursor-pointer bg-white shadow-md rounded-lg overflow-hidden my-3"
    >
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-3xl uppercase">
          {product?.title}
        </h1>
        <p className="text-gray-600 text-sm mt-1">{product?.description}</p>
      </div>
      <img
        className="h-56 w-full object-cover mt-2"
        src={product?.thumbnail}
        alt={product?.title}
      />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-lg">{product?.price}</h1>
        <h2 className="px-2 py-1 bg-gray-200 text-xs text-gray-900 font-semibold  uppercase hover:bg-gray-400">
          {product?.discountPercentage}
        </h2>
      </div>
    </div>
  );
}

export default Product;
