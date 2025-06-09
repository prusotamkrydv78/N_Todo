import { getUserFromToken } from "@/lib/auth";
import List from "../../components/List";

const Page = async () => {
  const user = await getUserFromToken()
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/crud?userId=${user._id}`, {
    cache: "no-store",
    next: { revalidate: 10 },
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await res.json();

  return <List data={data.todos} loading={false} error={null} />;
};

export default Page;
