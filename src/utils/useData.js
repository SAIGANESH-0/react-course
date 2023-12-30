import {useState,useEffect} from 'react';

const useData = () => {

    const [data, setdata] = useState([]);

    async function fetchProducts(){

      const Data = await fetch("https://dummyjson.com/products");
      const Json=await Data.json();
      setdata(Json?.products); 
    }

    useEffect( () => {
       fetchProducts();
    }, []);

    return data; 

}

export default useData;
