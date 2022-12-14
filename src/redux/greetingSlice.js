import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  greeting: "",
};

export const getMessage = createAsyncThunk("greeting/getGreeting", async () => {
  const data = await fetch("http://localhost:3000/api/v1/greetings", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
  console.log(data.message);
  return data.message;
});

export const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: {
    [getMessage.fulfilled]: (state, action) => ({
      ...state,
      greeting: action.payload,
    }),
  },
});

export default greetingSlice.reducer;
