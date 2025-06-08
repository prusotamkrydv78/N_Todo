import UserModel from "@/models/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDb from "@/database/connectDb";

export const GET = async (req) => {
  return NextResponse.json({
    message: "Register API endpoint",
    status: "success",
  });
};

export const POST = async (req) => {
  connectDb()
  try {
    const { fullName, username, password } = await req.json();

    if (!fullName || !username || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { message: "Username already taken" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      fullName,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      message: "Registration successful",
      user: newUser,
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
};
