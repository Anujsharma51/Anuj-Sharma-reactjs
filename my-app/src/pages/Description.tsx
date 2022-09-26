import React, { useEffect,useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToFavorite, getDescription } from "../redux/action";

const Description = () => {
    const [done, setDone] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getDescription(id));
  }, []);

  const state = useSelector((state: any) => state);
  console.log("state:", state.product.singelProduct);
 const handleClick = (el:Object) => {
    setDone((prv:boolean) =>!prv)

    dispatch(AddToFavorite(el))
  }
  
  return (
    <div className="p-2 box-border text-center flex justify-center mt-10 gap-10">
      <div>
        <img className="w-96" src={state.product.singelProduct.avatar} alt="" />
      </div>
      <div className="w-2/5">
        <div className="text-xs" >
          <b>{state.product.singelProduct.name}</b>
          <div className="font-medium text-yellow-700">{state.product.singelProduct.category}</div>
        </div>
        <div className="text-gray-600 mt-1 mr-px mb-1.5 ml-1">
          <p>{state.product.singelProduct.description}</p>
        </div>
        <div className="text-red-600">
          <b>₹{state.product.singelProduct.price}</b>
        </div>
        <div className="flex text-center justify-center items-start">
          <MdOutlineFavoriteBorder onClick={() => handleClick(state.product.singelProduct)} className={done ? "text-pink-600 cursor-pointer hover:text-blue-200 text-xl" : "cursor-pointer hover:text-blue-200 text-lg"}  />
   <span className="text-gray-400">Add to favorite  </span>
        </div>
      </div>
    </div>
  );
};

export default Description;
