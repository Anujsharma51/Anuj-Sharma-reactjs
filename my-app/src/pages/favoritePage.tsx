import React from 'react'
import { useSelector } from 'react-redux'
import FavoritePageData from './FavoritePageData';

const FavoritePage = () => {
   const state: any = useSelector((state) => state);
   console.log('state:', state)
  return (
 <div className="grid grid-cols-3 gap-9 mt-7">
        {state.product.FavData.map((el: Object,i: number) =>{
          return <FavoritePageData key={i} value={{ el,i}}  />;
        })}
      </div>
  )
}

export default FavoritePage