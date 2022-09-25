import React from "react";
import CSS from 'csstype';
import { Link } from "react-router-dom";
export type navLinkStyle= {
    isActive: any;
    
}
const Navbar = () => {
  return (
    <div className="p-7 bg-black text-blue-50 flex justify-between text-lg font-bold font-sans">
      <div>Logo</div>
      <div className="flex gap-36">
        <Link  to="/">Home</Link>

              <Link  to="/favorite">favorite </Link>
      </div>
    </div>
  );
};

export default Navbar;
