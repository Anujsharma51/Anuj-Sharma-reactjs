import { categoriesActionsTypes, filterActionsTypes, OnePageDataType, productActionsTypes, productAddToFavActionsTypes } from "./actionType";
export interface productTypes {
  _id?: string;
  name: string;
  avatar: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
  createdAt?: string;
  updatedAt?: string;
}

export type reducerType = {
 
  Data: [],
  FilterData: [],
  FavData: [],
  Categories:[]
  isLoading: boolean,
  isError: boolean,
  singelProduct:{}
};

 const init :reducerType = {
   Data: [],
   FilterData: [],
   FavData: [],
   Categories:[],
   isLoading: false,
   isError: false,
   singelProduct:{}
};

export const productReducer = (state=init,action:any) => {
//  console.log('action:', action.payload)
 
  
  switch (action.type) {
    case productActionsTypes.REQUEST: {
      return {...state,isLoading:true,isError:false}
    }
    case productActionsTypes.SUCCESS: {
      return {...state,isLoading:false,isError:false,Data:action.payload,FilterData : action.payload}
    }
    case productActionsTypes.FAILURE: {
      return {...state,isLoading:false,isError:true}
    }
    case  productAddToFavActionsTypes.REQUEST: {
      return {...state,isLoading:true,isError:false}
    }
      
    case  productAddToFavActionsTypes.SUCCESS: {
      return {...state,isLoading:false,isError:false,FavData:[...state.FavData,action.payload]}
    }
    case  categoriesActionsTypes.REQUEST: {
      return {...state,isLoading:true,isError:false}
    }
       case   categoriesActionsTypes.SUCCESS: {
      return {...state,isLoading:false,isError:false,Categories:[...state.Categories,action.payload]}
    }
      /////////filter

          case filterActionsTypes.REQUEST: {
      return {...state,isLoading:true,isError:false}
    }
     
    case filterActionsTypes.SUCCESS: {
      let data = state.Data
  
      return { ...state, isLoading: false, isError: false, FilterData: 
          data.filter((el: productTypes) => el.category === action.payload),
         };
    }
   ///////////////////////one page
      
        case OnePageDataType.REQUEST: {
      return {...state,isLoading:true,isError:false}
    }
         case   OnePageDataType.SUCCESS: {
      return {...state,isLoading:false,isError:false,singelProduct:action.payload}
    }
  ///////////////deleted
       case "delete": {
   
  
      return { ...state, isLoading: false, isError: false, FavData: 
          state.FavData.filter((el: productTypes) => el._id !== action.payload),
         };
    }
        case "sort": {
      let data = state.Data
  
      return { ...state, isLoading: false, isError: false, FilterData: 
          [...data.sort((a:any,b:any)=>action.payload==="lh"?a.price-b.price:b.price-a.price)],
         };
    }
    default:
      return state;
  }
}

