import * as actionTypes from './types';

const initialState = {
    currentCountry: 'AUD',
}

//similar to an event listener
function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_RATE:
            return {...state, currency: action.payload};
        case actionTypes.SET_COUNTRY:
            return {...state, currency: action.payload};
        case actionTypes.LOAD_ALL_RATES:
            return {...state, currency: action.payload};
        default:
            return state;
    }
}

export default currencyReducer;