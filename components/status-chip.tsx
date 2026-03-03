import React from "react";

const statusStyles: Record<string, string> = {
  completed: "bg-green-500/10 text-green-500 border border-green-500/20",
  scheduled: "bg-neutral-500/10 text-neutral-500 border border-neutral-500/20",
  failed: "bg-red-500/10 text-red-500 border border-red-500/20",
};

const StatusChip = ({ status }: { status: string }) => {
  return (
    <span
      className={`rounded-lg px-2.5 py-0.5 text-sm font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusChip;
