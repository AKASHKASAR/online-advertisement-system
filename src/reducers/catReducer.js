import * as CT from "../actions/types";

const initialState = {
  cat: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case CT.CATEGORY_SAVED_SUCCESS:
      return {
        message: action.payload,
        error: "",

      };


    default:
      return state;
  }

};

export default reducer;