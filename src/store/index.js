import { configureStore, createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "assets/MOCK_DATA.json";

const sortDataSlice = createSlice({
  name: "data",
  initialState: [...MOCK_DATA],
  reducers: {
    descending(state, action) {
      state.sort((a, b) => (a[action.payload] > b[action.payload] ? -1 : 1));
    },
    ascending(state, action) {
      state.sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : -1));
    },
  },
});

const store = configureStore({
  reducer: { data: sortDataSlice.reducer },
});

export const setDataActions = sortDataSlice.actions;

export default store;
