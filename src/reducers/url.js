const initialState = {
  key: "",
  _url: "",
};
const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      const newUrl = action.payload;
      state = newUrl;
      return state;
    default:
      return state;
  }
};
export default urlReducer;
