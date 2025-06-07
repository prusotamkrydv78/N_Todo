import connectDb from "@/database/connectDb";
import TodoModel from "@/models/todo";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  await connectDb();
  try {
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    const getTodos = await TodoModel.findById(id);
    if (!getTodos) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }
    return NextResponse.json(
      {
        message: "GET request successful",
        todo: getTodos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching todo:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
