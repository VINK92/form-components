import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  },
  reducers: {
    getValues: (state) => {
      return state;
    },
    setValues: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getValues, setValues } = formSlice.actions;

export default formSlice.reducer;
