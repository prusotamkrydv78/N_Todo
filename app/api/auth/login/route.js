import { NextResponse } from "next/server";

export const GET = async (req) => {
  return NextResponse.json({
    message: "Login API endpoint",
    status: "success",
  });
};

export const POST = async (req) => {
  try {
    const { username, password } = await req.json();

    // Here you would typically validate the user credentials against your database
    // For demonstration, we will assume a successful login if both fields are provided
    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    // Simulate a successful login response
    return NextResponse.json({
      message: "Login successful",
      user: { username },
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
};
