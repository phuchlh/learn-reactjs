const { createSlice } = require("@reduxjs/toolkit");
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state) {
      // không cần action nên xoá luôn cũng được
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});
const { actions, reducer } = counterSlice; // nó tự tạo actions, reducer tương ứng
export const { increase, decrease } = actions; // name export
export default reducer; //default export
