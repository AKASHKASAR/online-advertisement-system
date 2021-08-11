import * as UT from "../actions/types";

const initialState = {
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case UT.USER_SAVED_SUCCESS:
        return {
          message: action.payload,
          error: "",
        };


        default:
            return state;
        }


    };




    export default reducer;