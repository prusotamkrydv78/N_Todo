import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET(req) {
  const token = cookies().get("token")?.value;

  if (!token) return res.status(401).json({ user: null });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json(    user.user._doc,
   );
  } catch (err) {
    res.status(401).json({ user: null });
  }
}
