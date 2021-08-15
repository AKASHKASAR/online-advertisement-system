import * as PT from "./types";
import axios from "axios";

export const addProduct = (productObject) => {
    return (dispatch) => {
      dispatch(productRequest());
      axios
        .post("/user/seller/AddNewAdv", productObject)
        .then((response) => {
          dispatch({
            type: PT.PRODUCT_SAVED_REQUEST,
            payload: response.data.message,
          });
        })
        .catch((error) => {
          dispatch(productFailure(error.message));
        });
    };


  };

  export const updateProduct = (productObject) => {
    return (dispatch) => {
      dispatch(productRequest());
      axios
        .put(`/user/seller/editAdv`, productObject)
        .then((response) => {
          dispatch({
            type: PT.PRODUCT_UPDATE_REQUEST,
            payload: response.data.message,
          });
        })
        .catch((error) => {
          dispatch(productFailure(error.message));
        });
    };


  


  };
   
  export const deleteProduct = advid => dispatch => {
    axios
      .delete(`/user/seller/deleteAdv/${advid}`)
      .then(res =>
        dispatch({
          type: PT.PRODUCT_DELETE_REQUEST,
          payload: advid
        })
      )
  };


//   export const getBooks = (user_id) => dispatch => {
//   dispatch(setBooksLoading());
//   axios
//     .get('/api/books', {
//       params: {
//         user_id: user_id
//       }
//     })
//     .then(res =>
//       dispatch({
//         type: PT.PRODUCT_FIND_REQUEST,
//         payload: res.data
//       })
//     )
// };
  
 

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