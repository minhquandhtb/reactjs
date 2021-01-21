const initialState = {
  url: "http://localhost:4000/products?",
};
const urlReducer = (state=initialState , action) => {
  switch (action.type) {
    case "SORT":
      const newUrl = initialState.url + action.payload;
      state.url=newUrl;
      console.log(initialState.url);
      console.log(action.payload);
      console.log(state.url);
      return state;
    default:
      console.log("default");
      return state;
  }
};
export default urlReducer;
