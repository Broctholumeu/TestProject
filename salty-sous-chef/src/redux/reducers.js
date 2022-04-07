import setCurrency from './actions.js';

const initialState = {
    currency: 'AUD',
}

//similar to an event listener
function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case setCurrency:
            return {...state, currency: action.payload};
        default:
            return state;
    }
}

export default currencyReducer;