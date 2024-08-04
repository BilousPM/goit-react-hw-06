import { SEARCH } from './constants';

const initialState = {
  searchName: '',
};

const filtersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SEARCH:
      return { ...state, searchName: actions.payload };
    default:
      return state;
  }
};

export default filtersReducer;
