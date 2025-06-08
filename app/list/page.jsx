import List from "../../components/List"; 

const Page = async () => { 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/crud`, {
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

  return  <List data={data.todos} loading={false} error={null} />;
};

export default Page;
