import { GET_ME } from "../action";

const initialState = {
  content: null,
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default meReducer;
