import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    amount: '',
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setFromCurrency: (state, action) => {
            state.fromCurrency = action.payload;
        },
        setToCurrency: (state, action) => {
            state.toCurrency = action.payload;
        },
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        reset: () => initialState,
    },
});

export const { setFromCurrency, setToCurrency, setAmount, reset } = currencySlice.actions;

export const selectCurrencyState = (state) => state.currency;

export default currencySlice.reducer;