import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk("tasks/getTasks", async (thunkAPI) => {
  const res = await fetch("/data", {
    method: "GET",
    mode: "no-cors",
  });
  return res.json();
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1 },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
  },
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    loading: true,
  },
  reducers: {
    addTask: (state, action) => {
      state.list = action.payload;
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },
  },
  extraReducers: {
    [getTasks.pending]: (state) => {
      state.loading = true;
    },
    [getTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    [getTasks.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export const { removeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
