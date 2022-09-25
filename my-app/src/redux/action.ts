import axios from "axios"
import { productActionsTypes } from "./actionType";

//product Fetch Request function

export const productFetchRequest = () => ({
    type: productActionsTypes.REQUEST,
});
//product Fetch Success function

export const productFetchSuccess = (payload:[]) => ({
    type: productActionsTypes.SUCCESS,
payload,
});


export const getData = () => (dispatch:any)=>{
    dispatch(productFetchRequest())
    let tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudXVqc2hhcm1hOTZAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0FudWpzaGFybWE1MSIsImlhdCI6MTY2Mzk1ODc3NiwiZXhwIjoxNjY0MzkwNzc2fQ.ZLON39trxuyOMuuIyiC0fXnqA46GRlfq_7MSP_8h5BI';
    axios.get(`https://upayments-studycase-api.herokuapp.com/api/products`, { headers: { "Authorization": `Bearer ${tokenStr}` } }).then((response) => {
     let payload=response.data.products
        dispatch(productFetchSuccess(payload));


        
    
})
}

