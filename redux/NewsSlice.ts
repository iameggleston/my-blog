import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { client } from "libs/client";

type DateType = {
  category: object;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  id: string;
  title: string;
}[];

type Props = {
  news: DateType | [];
  error: boolean;
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  const data = await client.get({ endpoint: "news" });
  return data.contents;
});

const initialState: Props = {
  news: [],
  error: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNews.fulfilled, (state, action: PayloadAction<DateType>) => {
        state.news = action.payload;
      })
      .addCase(getNews.rejected, state => {
        state.error = true;
      });
  },
});

export default newsSlice.reducer;
