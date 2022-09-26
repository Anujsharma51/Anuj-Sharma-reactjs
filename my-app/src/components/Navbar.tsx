import React from "react";
import CSS from 'csstype';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// export type navLinkStyle= {
//     isActive: any;
    
// }
const Navbar = () => {
  const state= useSelector((state:any)=>state)
  return (
    <div className="p-7 bg-black text-blue-50 flex justify-between text-lg font-bold font-sans relative">
      <div>Logo</div>
      <div className="flex gap-36 ">
        <Link  to="/">Home</Link>
        <Link  to="/create">Create </Link>

        <Link className="relative" to="/favorite">Favorite
          <div className=" absolute text-white bg-red-900 h-7 w-7 text-center text-lg pb-0 top-3/4 rounded-full left-5 " >{ state.product.FavData.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
