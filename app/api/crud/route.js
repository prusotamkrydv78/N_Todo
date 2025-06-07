import { NextResponse } from "next/server";

import TodoModel from "@/models/todo";
import connectDb from "@/database/connectDb";

export const GET = async (req) => {
  await connectDb();
  try {
    const getTodos = await TodoModel.find({});
    if (!getTodos) {
      return NextResponse.json({ error: "No todos found" }, { status: 404 });
    }
    return NextResponse.json(
      {
        message: "GET request successful",

        todos: getTodos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  await connectDb();
  try {
    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const newTodo = new TodoModel({ title, description });
    await newTodo.save();

    return NextResponse.json({
      message: "POST request successful",
      data: {
        newTodo,
      },
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  await connectDb();
  try {
    const body = await req.json();
    const { id, title, description } = body;

    if (!id || !title || !description) {
      return NextResponse.json(
        { error: "ID, title, and description are required" },
        { status: 400 }
      );
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: false }
    );

    if (!updatedTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "PUT request successful",
      data: {
        updatedTodo,
      },
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req) => {
  await connectDb();
  const { id } = await req.json();
  try {
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedTodo = await TodoModel.findByIdAndDelete(id);

    if (!deletedTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "DELETE request successful",
      data: {
        deletedTodo,
      },
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
