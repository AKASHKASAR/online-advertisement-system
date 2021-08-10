import * as UT from "./types";
import axios from "axios";

export const registerUser = (userObject) => {
    return (dispatch) => {
      dispatch(userRequest());
      axios
        .post("/Registration", userObject)
        .then((response) => {
          dispatch({
            type: UT.USER_SAVED_SUCCESS,
            payload: response.data.message,
          });
        })
        .catch((error) => {
          dispatch(userFailure(error.message));
        });
    };


  };
 
  const userRequest = () => {
    return {
      type: UT.USER_REQUEST,
    };
  };
  
  const userSuccess = (users) => {
    return {
      type: UT.USER_SUCCESS,
      payload: users,
    };
  };
  
  const userFailure = (error) => {
    return {
      type: UT.USER_FAILURE,
      payload: error,
    };

  };