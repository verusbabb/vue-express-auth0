import mongoose from "mongoose";

const Schema = mongoose.Schema;

const memberChildrenSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  class: {
    type: Number,
  },
});

export const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
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
  type: {
    type: String,
    required: true,
  },
  class: {
    type: Number,
  },
  chapter: {
    type: String,
  },
  memberChildren: {
    type: [memberChildrenSchema],
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

export default mongoose.model("User", userSchema);
