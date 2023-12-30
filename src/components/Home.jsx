import useData from "../utils/useData";
import Product from "./Product.jsx";
const Home = () => {
  const aProducts=useData();
  return <div>
    {aProducts.length && aProducts.map((i)=>{
      return <Product key={i.id} product={i}/>
    })}
  </div>;
};
export default Home;
