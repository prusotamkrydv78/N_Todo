import List from "./List";

const Page = async () => {
  const res = await fetch("http://localhost:3000/api/crud", {
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
  console.log(data);

  return <List data={data.todos} loading={false} error={null} />;
};

export default Page;
