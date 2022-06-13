import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const axios = require("axios").default;

export const getTasks = createAsyncThunk("tasks/getTasks", async (thunkAPI) => {
  const res = await axios.get("/data/getTask").then((res) => res.data);
  return res;
});

export const postTask = createAsyncThunk("tasks/postTask", async (newPost) => {
  const data = await axios
    .post("/data/addTask", newPost)
    .then((res) => res.data);
  return data;
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    loading: true,
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        const temp = state.list;
        temp.push(action.payload);
        state.list = temp;
      },
      prepare: (payload) => {
        payload.id = 5;
        return { payload };
      },
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
    [postTask.fulfilled]: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { removeTask, addTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
