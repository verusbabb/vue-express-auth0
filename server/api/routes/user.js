import express from "express";
import User from "../../models/user.js";

const app = express();

app.get("/api/users", async (req, res) => {
  const users = await User.find({});
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get user by id
app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById({
    _id: req.params.id,
  });
  if (!user) res.status(404).send("Not a valid user Id");

  try {
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/users/:id", async (req, res) => {
  const user = await User.findById({
    _id: req.params.id,
  });
  if (!user) res.status(404).send("Not a valid user Id");
  try {
    await user.updateOne(req.body);
    res.status(201).send("user updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete({
    _id: req.params.id,
  });
  if (!user) res.status(404).send("Not a valid user Id");
  try {
    res.status(204).send("user deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;
