import express from "express";
import Event from "../../models/event.js";

const app = express();

app.get("/api/events", async (req, res) => {
  const events = await Event.find({});

  try {
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/events/:id", async (req, res) => {
  const event = await Event.findById({
    _id: req.params.id,
  });
  if (!event) res.status(404).send("Not a valid event Id");
  try {
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/events", async (req, res) => {
  const event = new Event(req.body);
  try {
    await event.save();
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/events/:id", async (req, res) => {
  const event = await Event.findById({
    _id: req.params.id,
  });
  if (!event) res.status(404).send("Not a valid event Id");
  try {
    await event.updateOne(req.body);
    res.status(201).send("event updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/events/:id", async (req, res) => {
  const event = await Event.findByIdAndDelete({
    _id: req.params.id,
  });
  if (!event) res.status(404).send("Not a valid event Id");
  try {
    res.statis(204).send("event deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;
