import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";

const rootReducer = {
  count: counterReducer, // counterReducer lấy từ cái counterSlice (export default -> import default)
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
