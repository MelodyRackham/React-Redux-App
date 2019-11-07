import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  catFacts: [],
  isFecthing: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFecthing: true,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFecthing: false,
        error: '',
        catFacts: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFecthing: false,
      };
    default:
      return state;
  }
};

export default reducer;
