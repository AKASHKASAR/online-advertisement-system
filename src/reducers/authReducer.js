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

        case UT.USER_REQUEST:
        return {
          // message: action.payload,
          // error: "",
          ...state,
        };


        default:
            return state;
        }


    };




    export default reducer;
