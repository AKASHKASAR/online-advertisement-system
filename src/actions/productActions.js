import * as PT from "./types";
import axios from "axios";

export const addProduct = (productObject) => {
    return (dispatch) => {
      dispatch(productRequest());
      axios
        .post("/user/seller/AddNewAdv", productObject)
        .then((response) => {
          dispatch({
            type: PT.PRODUCT_SAVED_SUCCESS,
            payload: response.data.message,
          });
        })
        .catch((error) => {
          dispatch(productFailure(error.message));
        });
    };


  };

  const productRequest = () => {
    return {
      type: PT.PRODUCT_REQUEST,
    };
  };
  
  const productSuccess = (products) => {
    return {
      type: PT.PRODUCT_SUCCESS,
      payload: products,
    };
  };
  
  const productFailure = (error) => {
    return {
      type: PT.PRODUCT_FAILURE,
      payload: error,
    };

  };