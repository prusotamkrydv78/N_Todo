"use client";

import { useRouter } from "next/navigation";

const { useEffect } = require("react");

const useAuth = () => {
  const router = useRouter();
  useEffect(() => {
    if (!User) {
      router.push("/auth/login");
    } else {
    }
  }, []);
  if (!User) {
    return false;
  } else {
    return true;
  }
};

export default useAuth;

export const User = JSON.parse(localStorage.getItem("user"));
