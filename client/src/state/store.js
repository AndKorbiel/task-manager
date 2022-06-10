import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, tasksReducer } from "./reducers";

export default configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
});
