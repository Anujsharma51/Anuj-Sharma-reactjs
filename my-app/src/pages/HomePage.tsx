import React, {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterCategory, getAllCategory, getData, SortProduct } from "../redux/action";
import { useSelector } from "react-redux";
import Loder from "../components/Loder";
import Product from "./Product";
// import Product from "./Product";
const HomePage = () => {
  const state :any = useSelector((state) => state);
  console.log('FilterData:', state.product.FilterData)
  // console.log('Product:', state.product)
  // console.log('state.product.Data:',product.Data)

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
// console.log("prod",prod)
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  if (state.product.isLoading) {
    return <Loder />;
  }

  const hanldeChange = (e: any) => {
    dispatch(filterCategory(e.target.value));
  };

  const handleSort = (e:any) => {
    
dispatch(SortProduct(e.target.value))

  }
  return (
    <>
      <select onChange={hanldeChange} className="border border-solid border-black-500 w-44 m-3">
        {state.product?.Categories[0]?.map((el: any, i: number) => {
          return (
            <option key={i} value={el.name}>
              {el.name}
            </option>
          );
        })}
      </select>

      <select onChange={handleSort} className="border border-solid border-black-500 w-44 m-3">

        <option value="lh">low to high</option>
        <option value="hl">high to low</option>
      </select>
      <div className="grid grid-cols-3 gap-9 mt-7">
      {state.product.FilterData.map((el: {}, i: number) => {
          return <Product key={i} value={{ el, i }} />;
        })}
      </div> 
    </>
  );
};

export default HomePage;
