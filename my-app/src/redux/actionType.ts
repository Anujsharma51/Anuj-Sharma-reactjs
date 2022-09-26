export type productTypes = {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};
export type categoriesTypes = {
   REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};
export type filterTypes = {
   REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};

export const productActionsTypes: productTypes = {
  REQUEST: "REQUESTPRODUCTS",
  SUCCESS: "SUCCESSPRODUCTS",
  FAILURE: "FAILUREPRODUCTS",
};
export const productAddToFavActionsTypes: productTypes = {
  REQUEST: "REQUESTADDPRODUCTS",
  SUCCESS: "SUCCESSADDPRODUCTS",
  FAILURE: "FAILUREADDPRODUCTS",
};


export const productCreateTypes: productTypes = {
  REQUEST: "REQUESTCREATEPRODUCTS",
  SUCCESS: "SUCCESSCREATEPRODUCTS",
  FAILURE: "FAILURECREATEPRODUCTS",
};


export const categoriesActionsTypes: categoriesTypes = {
 
   REQUEST: "REQUESTCATEGOIES",
  SUCCESS: "SUCCESSCATEGOIES",
  FAILURE: "FAILURECATEGOIES"
};

//////////filter types

export const filterActionsTypes: categoriesTypes = {
 
   REQUEST: "REQUESTFILTER",
  SUCCESS: "SUCCESSFILTER",
  FAILURE: "FAILUREFILTER"
};


export const OnePageDataType:filterTypes = {
  
  REQUEST: "REQUESTOnePage",
  SUCCESS: "SUCCESSOnePage",
  FAILURE: "FAILUREOnePage"
}