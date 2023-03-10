import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

export const MoneySlice = createSlice({
  name: "Money",
  initialState,
  reducers: {
    addMoney: (state, { payload }: PayloadAction<number>) => {
      return state + payload;
    },
    removeMoney: (state, { payload }: PayloadAction<number>) => {
      return state - payload;
    },
    setMoney: (state, { payload }: PayloadAction<number>) => {
      return payload;
    },
  },
});

export const { addMoney, removeMoney, setMoney } = MoneySlice.actions;

export default MoneySlice.reducer;
