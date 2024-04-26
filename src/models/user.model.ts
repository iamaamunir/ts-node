import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config/default";
import { promises } from "dns";

interface userDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<userDocument>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let user = this as userDocument;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(Number(config.SALTWORKERFACTOR));
  const hash = await bcrypt.hash(String(user.password), salt);
  user.password = hash;
  return next();
});

userSchema.methods.comparePasswords = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as userDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const userModel = mongoose.model<userDocument>("User", userSchema);
export default userModel;
