const initialState = {
  url: "",
};
const urlReducer = (state=initialState , action) => {
  switch (action.type) {
    case "SORT":
      const newUrl = action.payload;
      state.url=newUrl;
      return state;
    default:
      return state;
  }
};
export default urlReducer;
