const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connection;
const MONGODB_URI = "mongodb://localhost:27017/taskslist";
app.use(bodyParser.json());

// db
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("DB is connected");
});

// routes
const tasks = require("./routes/tasks.route");
app.use("/data", tasks);

app.listen(5001, () => {
  console.log("Server is up on port 5001");
});
