
import * as CT from "./types";
import axios from "axios";



export const addCat = (catObject) => {
    return (dispatch) => {
      dispatch(catRequest());
      axios
        .post("/admin/addCategory", catObject)
        .then((response) => {
          dispatch({
            type: CT.CATEGORY_SAVED_SUCCESS,
            payload: response.data.message,
          });
        })
        .catch((error) => {
          dispatch(catFailure(error.message));
        });
    };


  };

  const catRequest = () => {
    return {
      type: CT.CATEGORY_REQUEST,
    };
  };
  
  const catSuccess = (cat) => {
    return {
      type: CT.CATEGORY_SUCCESS,
      payload: cat,
    };
  };
  
  const catFailure = (error) => {
    return {
      type: CT.CATEGORY_FAILURE,
      payload: error,
    };

  };