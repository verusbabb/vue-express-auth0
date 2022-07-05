import express from "express";
import Registration from "../../models/registration.js";

const app = express();

app.get("/api/registrations", async (req, res) => {
  const registrations = await Registration.find({});

  try {
    res.send(registrations);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/registrations/:id", async (req, res) => {
  const registration = await Registration.findById({
    _id: req.params.id,
  });
  if (!registration) res.status(404).send("Not a valid registration Id");
  try {
    res.send(registration);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/registrations", async (req, res) => {
  const registration = new Registration(req.body);
  try {
    await registration.save();
    res.send(registration);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/registrations/:id", async (req, res) => {
  const registration = await Registration.findById({
    _id: req.params.id,
  });
  if (!registration) res.status(404).send("Not a valid registration Id");
  try {
    await registration.updateOne(req.body);
    res.status(201).send("registration updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/registrations/:id", async (req, res) => {
  const registration = await Registration.findByIdAndDelete({
    _id: req.params.id,
  });
  if (!registration) res.status(404).send("Not a valid registration Id");
  try {
    res.statis(204).send("registration deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;
