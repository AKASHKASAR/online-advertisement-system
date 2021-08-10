import * as PT from "../actions/types";

const initialState = {
  product: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case PT.PRODUCT_SAVED_SUCCESS:
        return {
          message: action.payload,
          error: "",
        

        };


        default:
            return state;
        }


    };




    export default reducer;