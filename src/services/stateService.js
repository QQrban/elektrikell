import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    hourRange: 1,
    lowPriceTimestamp: null,
    activePrice: 'low',
    errorMessage: null,
    currentPrice: null,
};

export const setHourRange = createAction('setHourRange');
export const setLowPriceTimestamp = createAction('setLowPriceTimestamp');
export const setActivePrice = createAction('setActivePrice');
export const setErrorMessage = createAction('setErrorMessage');
export const setCurrentPrice = createAction('setCurrentPrice');

const reducer = createReducer(initialState, {
    [setHourRange]: (state, action) => {
        state.hourRange = action.payload;
    },
    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    },
    [setActivePrice]: (state, action) => {
        state.activePrice = action.payload;
    },
    [setErrorMessage] : (state, action) => {
        state.errorMessage = action.payload;
    },
    [setCurrentPrice] : (state, action) => {
        state.currentPrice = action.payload;
    }
});

export const store = configureStore({reducer});