import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
