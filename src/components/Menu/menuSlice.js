import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "url",
  initialState: {
    stateMainSlice: { _url: "", key: "" },
  },
  reducers: {
    setUrl: (state, action) => {
      state.stateMainSlice = action.payload;
    },
  },
});

const { reducer, actions } = mainSlice;
export const { setUrl } = actions;
export default reducer;
