import mongoose from "mongoose";

export default function validId(entityId) {
  try {
    console.log(mongoose.mongo.ObjectId(entityId).toString());
    return mongoose.mongo.ObjectId(entityId).toString();
  } catch {
    return false;
  }
}
