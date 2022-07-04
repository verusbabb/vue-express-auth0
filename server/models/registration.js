import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const registrationSchema = new Schema({
  eventId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  numAttending: {
    type: Number,
    required: true,
  },
  subEvents: {
    type: Array,
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

export default mongoose.model("Registration", registrationSchema);
