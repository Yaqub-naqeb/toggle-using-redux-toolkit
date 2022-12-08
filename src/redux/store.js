import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import signInReducer from "./counter/signIn";

export default configureStore({
  reducer: {
    counter: counterReducer,
    signIn: signInReducer
  }
});
