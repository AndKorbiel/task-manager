const express = require("express");
const app = express();

const data = [
  { id: 0, title: "Task 1", description: "Clear cache", status: 1 },
  { id: 1, title: "Task 2", description: "Do the development", status: 2 },
  { id: 2, title: "Task 3", description: "Close the door", status: 0 },
];

app.get("/data", (req, res) => {
  res.json(data).status(500);
});

app.listen(5001, () => {
  console.log("Server is up on port 5001");
});
