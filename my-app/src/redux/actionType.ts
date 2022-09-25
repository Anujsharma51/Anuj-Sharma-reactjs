export type productTypes = {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};
export type categoriesTypes = {
  SUCCESS: string;
};

export const productActionsTypes: productTypes = {
  REQUEST: "REQUESTPRODUCTS",
  SUCCESS: "SUCCESSPRODUCTS",
  FAILURE: "FAILUREPRODUCTS",
};

export const categoriesActionsTypes: categoriesTypes = {
  SUCCESS: "SUCCESSCATEGOIES",
};
