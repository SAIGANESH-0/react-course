import { useEffect } from "react";
import useData from "../utils/useData";
import Product from "./Product.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const aProducts = useData();
  const user = useSelector((store) => store.user);
  const navi = useNavigate();
  useEffect(() => {
    if (!user) navi("/login");
  }, []);

  return (
    <div>
      {aProducts.length &&
        aProducts.map((i) => {
          return <Product key={i.id} product={i} />;
        })}
    </div>
  );
};
export default Home;
