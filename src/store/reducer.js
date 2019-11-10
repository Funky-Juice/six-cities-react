import * as types from './action-types';


const initialState = {
  activeCity: null,
  activeOffers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CITY: return Object.assign({}, state, {
      activeCity: action.payload
    });

    case types.SET_ACTIVE_OFFERS: return Object.assign({}, state, {
      activeOffers: action.payload
    });
  }

  return state;
};

export default reducer;
