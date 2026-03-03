"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusChip from "../status-chip";
import ProgressBar from "../progress-bar";
import VulnerabilityBadges from "../vulnerability-badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Scan = {
  id: string;
  scanName: string;
  type: string;
  status: "completed" | "scheduled" | "failed";
  progress: number;
  vulnerability: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  lastScan: string;
};

export const columns: ColumnDef<Scan>[] = [
  {
    accessorKey: "scanName",
    header: "Scan Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return <StatusChip status={status} />;
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = row.original.progress; // full object available here
      return <ProgressBar progress={progress} />;
    },
  },
  {
    id: "vulnerability",
    header: "Vulnerability",
    cell: ({ row }) => {
      const { critical, high, medium, low } = row.original.vulnerability;
      return (
        <VulnerabilityBadges
          critical={critical}
          high={high}
          medium={medium}
          low={low}
        />
      );
    },
  },
  {
    accessorKey: "lastScan",
    header: "Last Scan",
  },
];
