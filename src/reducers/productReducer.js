import * as PT from "../actions/types";

const initialState = {
  product: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PT.PRODUCT_SAVED_REQUEST:
    case PT.PRODUCT_UPDATE_REQUEST:
    case PT.PRODUCT_DELETE_REQUEST:
    case PT.PRODUCT_FIND_REQUEST:


      return {
        ...state,
      };

    case PT.PRODUCT_SUCCESS:
      return {
        message: action.payload,
        error: "",};

      
        case PT.PRODUCT_FAILURE:
          return {
            message: action.payload,
            error: "",};
            





        default:
            return state;
      }


  };




  export default reducer;