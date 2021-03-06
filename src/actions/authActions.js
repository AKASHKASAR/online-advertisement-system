import * as UT from "./types";
import axios from "axios";


export const fetchUser = () => {
  return (dispatch) => {
    dispatch(userRequest());
    axios
      .get("/admin/getAllUserDetails")
      .then((response) => {
        dispatch(userSuccess(response.data));
      })
      .catch((error) => {
        dispatch(userFailure(error));
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