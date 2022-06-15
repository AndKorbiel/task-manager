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
    res.send(data).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

app.delete("/removeTask", async (req, res) => {
  const id = req.query;
  console.log(id[0]);
  Task.findByIdAndDelete(id[0])
    .then(() => res.json(id).status(200))
    .catch((err) => res.send(error).status(500));
});

app.put("/editTask", async (req, res) => {
  const id = req.body._id;

  const updatedTask = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  Task.findByIdAndUpdate(
    { _id: id },
    updatedTask,
    { new: true },
    (err, result) => {
      if (err) {
        res.send(err).status(500);
      } else {
        res.send(result).status(200);
      }
    }
  );
});

module.exports = app;
