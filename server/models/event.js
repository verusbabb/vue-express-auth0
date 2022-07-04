import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
    default: new Date().toISOString(),
  },
  updatedOn: {
    type: Date,
    required: true,
    default: new Date().toISOString(),
  },
});

export default mongoose.model("Event", eventSchema);
