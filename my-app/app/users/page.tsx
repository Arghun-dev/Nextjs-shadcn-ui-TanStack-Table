import { User, columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://6522ab28f43b17938414c315.mockapi.io/users");
  if (!res.ok) {
    throw new Error("Failed to get users");
  }
  return res.json();
}

export default async function Page() {
  const data = await getUsers();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All Users</h1>
        <DataTable data={data} columns={columns} />
      </div>
    </section>
  );
}
