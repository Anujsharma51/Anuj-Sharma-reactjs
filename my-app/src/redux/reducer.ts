import { productActionsTypes } from "./actionType";

export type reducerType = {
 
  Data: [],
  isLoading: boolean,
  isError:boolean,
};

 const init :reducerType = {
   Data: [],
   isLoading: false,
  isError: false,
};

export const productReducer = (state=init,action:any) => {
  
  switch (action.type) {
    case productActionsTypes.REQUEST: {
      return {...state,isLoading:true,isError:false}
    }
    case productActionsTypes.SUCCESS: {
      return {...state,isLoading:false,isError:false,Data:action.payload}
    }
    case productActionsTypes.FAILURE: {
      return {...state,isLoading:false,isError:true}
    }
      
     
  
    default:
      return state;
  }
}

