import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "../components/Menu/menuSlice";

export default configureStore({
  reducer: {
    urlChange: urlReducer,
  },
});
