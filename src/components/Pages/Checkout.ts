import { FC, useState } from "react";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "./Services";

export const getStateData = createAsyncThunk(
  "posts/getStateData",
  async (data, thunkApi) => {
    try {
      let response = await axios.get<Post[]>(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.values);
    }
  }
);

type initialStateType = {
  loading: boolean;
  data: Post[] | null;
  error: null | string;
};

const initialState: initialStateType = {
  loading: false,
  data: [],
  error: "",
};

const appSlice = createSlice({
  name: "PostData",
  initialState,
  reducers: {},
  extraReducers(builider) {
    builider
      .addCase(getStateData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getStateData.fulfilled,
        (state, action: PayloadAction<Post[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getStateData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appSlice.reducer;
