import { NextResponse } from "next/server";

export const GET = async (req) => {
  return NextResponse.json({
    message: "Register API endpoint",
    status: "success",
  });
};
export const POST = async (req) => {
  try {
    const { fullName, username, password } = await req.json();

    // Here you would typically save the user to your database
    // For demonstration, we will assume a successful registration if all fields are provided
    if (!fullName || !username || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Simulate a successful registration response
    return NextResponse.json({
      message: "Registration successful",
      user: { fullName, username },
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
};
