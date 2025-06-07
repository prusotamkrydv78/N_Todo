import React from "react";
import CreateTodo from "@/app/create/page";
const page = async ({ params }) => {
  const { todoId } = await params; 
  return <CreateTodo todoId={todoId} />;
};

export default page;
