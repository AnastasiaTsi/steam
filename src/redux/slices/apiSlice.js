import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://htb-steam-api.vercel.app/api/apps";

export const apiGET = createAsyncThunk("api/get", async (payload, thunkAPI) => {
  try {
    const response = await axios.get(null, { params: payload });
    if (!payload) return await { data: response.data, category: null };

    const category = Object.values(payload)[0];

    return await { data: response.data, category };
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const initialState = {
  games: null,
  game: null,
  new_and_trending: null,
  top_sellers: null,
  being_played: null,
  upcoming: null,
};

export const apiSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(apiGET.fulfilled, (state, { payload }) => {
      const { data, category } = payload;

      if (!category) {
        state.games = data;
      } else if (!isNaN(category)) {
        state.game = data[0];
      } else {
        state[category] = data;
      }
    });
  },
});

export default apiSlice.reducer;
