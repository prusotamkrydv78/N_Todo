import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export const getUserFromToken = async () => {
  const cookieStore = cookies(); // no need to await this, it's fine here
  const token = cookieStore.get('token')?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded?.user?._doc; // or decoded.user if structure differs
  } catch {
    return null;
  }
};
