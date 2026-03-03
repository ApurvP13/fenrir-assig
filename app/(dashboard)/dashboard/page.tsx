import { columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/dashboard/ScanTable";
import { StatusBar } from "@/components/status-bar";
import { mockScans } from "@/lib/mock-data";
import React from "react";

const Dashboard = () => {
  return (
    <section className="flex h-screen w-full flex-col gap-4 bg-neutral-100 dark:bg-black">
      <StatusBar />
      <div className="flex h-3/4 items-center justify-center p-2">
        <DataTable columns={columns} data={mockScans} />
      </div>
    </section>
  );
};

export default Dashboard;
