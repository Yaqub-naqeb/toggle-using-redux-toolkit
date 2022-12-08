import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    value: false
  },
  reducers: {
    signIn: (state) => {
      state.value = !state.value;
    },
    // signOut: (state) => {
    //   state.value =false;
    // },
    toggleByClick: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { signIn, toggleByClick } = signInSlice.actions;

export default signInSlice.reducer;
