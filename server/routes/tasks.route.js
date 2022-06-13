const express = require("express");
const app = express();
const Task = require("../models/task.model");

app.get("/getTask", (req, res) => {
  Task.find((err, tasks) => {
    if (err) {
      res.send("Error while getting data from database").status(500);
    }
    res.send(tasks).status(200);
  });
});

app.post("/addTask", async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    status: 0,
  });
  const data = await newTask.save();
  try {
    res.send(data).status(500);
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = app;
