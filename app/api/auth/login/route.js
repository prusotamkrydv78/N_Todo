import UserModel from "@/models/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDb from "@/database/connectDb";

export const GET = async (req) => {
  return NextResponse.json({
    message: "Login API endpoint",
    status: "success",
  });
};

export const POST = async (req) => {
  connectDb();
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    const userFound = await UserModel.findOne({ username });

    if (!userFound) {
      return NextResponse.json(
        { message: "Invalid Credentils, Please Try Again!" },
        { status: 401 }
      );
    }
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }
    return NextResponse.json({
      message: "Login successful",
      user: userFound,
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
};
