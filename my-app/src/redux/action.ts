import axios from "axios";
import {
  categoriesActionsTypes,
  filterActionsTypes,
  OnePageDataType,
  productActionsTypes,
  productAddToFavActionsTypes,
} from "./actionType";
import swal from "sweetalert";
//product Fetch Request function
let tokenStr =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudXVqc2hhcm1hOTZAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0FudWpzaGFybWE1MSIsImlhdCI6MTY2Mzk1ODc3NiwiZXhwIjoxNjY0MzkwNzc2fQ.ZLON39trxuyOMuuIyiC0fXnqA46GRlfq_7MSP_8h5BI";

export const productFetchRequest = () => ({
  type: productActionsTypes.REQUEST,
});
//product Fetch Success function

export const productFetchSuccess = (payload: []) => ({
  type: productActionsTypes.SUCCESS,
  payload,
});

export const getData = () => (dispatch: any) => {
  dispatch(productFetchRequest());
  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudXVqc2hhcm1hOTZAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0FudWpzaGFybWE1MSIsImlhdCI6MTY2Mzk1ODc3NiwiZXhwIjoxNjY0MzkwNzc2fQ.ZLON39trxuyOMuuIyiC0fXnqA46GRlfq_7MSP_8h5BI";
  axios
    .get(`https://upayments-studycase-api.herokuapp.com/api/products`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    })
    .then((response) => {
      let payload = response.data.products;
   
      dispatch(productFetchSuccess(payload));
    });
};

// product add to favoritePage
export const productAddToFavoriteRequest = () => ({
  type: productAddToFavActionsTypes.REQUEST,
});

export const productAddToFavoriteSuccess = (payload: {}) => ({
  type: productAddToFavActionsTypes.SUCCESS,
  payload,
});

export const AddToFavorite = (el: Object) => (dispatch: Function) => {
  dispatch(productAddToFavoriteRequest());
  dispatch(productAddToFavoriteSuccess(el));
};

// product create
export const productCreateRequest = () => ({
  type: productAddToFavActionsTypes.REQUEST,
});

export const productCreateSuccess = (payload: {}) => ({
  type: productAddToFavActionsTypes.SUCCESS,
  payload,
});

export const AddToNewProduct = (data: Object,navigate:any) => (dispatch: Function) => {
  console.log("data:", data);

  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudXVqc2hhcm1hOTZAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0FudWpzaGFybWE1MSIsImlhdCI6MTY2Mzk1ODc3NiwiZXhwIjoxNjY0MzkwNzc2fQ.ZLON39trxuyOMuuIyiC0fXnqA46GRlfq_7MSP_8h5BI";

  axios
    .post(`https://upayments-studycase-api.herokuapp.com/api/products`, data, {
      headers: {
        Authorization: `Bearer ${tokenStr}`,
      },
    })
    .then((response) => {
      swal("Added!", "Your Product has been added ", "success");
      navigate("/")
      // console.log("response:", response);
    });

  //   dispatch(productCreateSuccess(el));
};

/////////////get all category

export const CategoryRequest = () => ({
  type: categoriesActionsTypes.REQUEST,
});

export const CategorySuccess = (payload: []) => ({
  type: categoriesActionsTypes.SUCCESS,
  payload,
});

export const getAllCategory = () => (dispatch: any) => {
  dispatch(CategoryRequest());

  axios
    .get(`https://upayments-studycase-api.herokuapp.com/api/categories`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    })
    .then(({ data }) => {
      dispatch(CategorySuccess(data.categories));
    });
};


///////////filter category

export const FilterRequest = () => ({
  type: filterActionsTypes.REQUEST,
});

export const FilterSuccess = (payload: []) => ({
  type: filterActionsTypes.SUCCESS,
  payload,
});

export const  filterCategory=(category:any)=> (dispatch:any) => {
 console.log("action",category);
  dispatch(FilterRequest())
  dispatch(FilterSuccess(category))
 

}


//////description page

export const onePageRequest = () => ({
  type: OnePageDataType.REQUEST,
});

export const onePageSuccess = (payload: {}) => ({
  type: OnePageDataType.SUCCESS,
  payload,
});

export const getDescription = (id: any) => (dispatch:any) => {
  dispatch(onePageRequest())

  let tokenStr =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudXVqc2hhcm1hOTZAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0FudWpzaGFybWE1MSIsImlhdCI6MTY2Mzk1ODc3NiwiZXhwIjoxNjY0MzkwNzc2fQ.ZLON39trxuyOMuuIyiC0fXnqA46GRlfq_7MSP_8h5BI";
  axios
    .get(`https://upayments-studycase-api.herokuapp.com/api/products/${id}`, {
      headers: { Authorization: `Bearer ${tokenStr}` },
    })
    .then((response) => {
      // console.log('response:', response)
      let payload = response.data.product;
      console.log('payload:', payload)
   
     dispatch(onePageSuccess(payload))
    });


}

//////////////////deleted
export const DeletFavPageData = (payload: any) => ({
  type: "delete",
  payload,
});
export const DeleteProduct = (id:any) =>(dispatch: any)=> {
  
dispatch(DeletFavPageData(id))
}
///////////////sort

export const sortPage = (payload: any) => ({
  type: "sort",
  payload,
});

export const SortProduct = ( value: any) => (dispatch: any)=>{
  
dispatch(sortPage(value))
}