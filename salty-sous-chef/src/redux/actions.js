import * as actionTypes from './types.js';

export const setCountry = (itemID) => {
    return {
        type: actionTypes.SET_COUNTRY,
        payload: {
            id: itemID
        },
    };
};

export const fetchRate = (itemID) => {
    return {
        type: actionTypes.FETCH_RATE,
        payload: {
            id: itemID
        },
    };
};

export const loadAllRates = (item) => {
    return {
        type: actionTypes.LOAD_ALL_RATES,
        payload: item
    };
};