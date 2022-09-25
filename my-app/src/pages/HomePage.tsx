import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/action";
import { useSelector } from "react-redux";
import Loder from "../components/Loder";
import Product from "./Product";
const HomePage = () => {
  // const [data, setData] = useState([]);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const state: any = useSelector((state) => state);

  if (state.product.isLoading) {
    return <Loder />;
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-9 mt-7">
        {state.product.Data.map((el: Object,i: number) =>{
          return <Product key={i} value={{ el,i}}  />;
        })}
      </div>
    </>
  );
};

export default HomePage;
