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

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  const data = await axios
    .delete("/data/removeTask/", {
      params: id,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
});

export const editTask = createAsyncThunk("tasks/editTask", async (task) => {
  const data = await axios
    .put("/data/editTask/", {
      ...task,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    loading: true,
  },
  reducers: {},
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
    [deleteTask.fulfilled]: (state, action) => {
      state.list = state.list.filter((el) => el._id === action.payload._id);
    },
    [editTask.fulfilled]: (state, action) => {
      let temp = [...state.list];
      temp = temp.map((el) => {
        if (el._id === action.payload._id) {
          return action.payload;
        } else {
          return el;
        }
      });
      state.list = temp;
    },
  },
});

export const { removeTask, addTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
