import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./reducers";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
