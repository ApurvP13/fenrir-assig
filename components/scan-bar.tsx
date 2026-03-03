"use client";
import { Home } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const ScanBar = () => {
  return (
    <div className="bg-background flex w-full items-center justify-between p-4">
      {/* scan and the path */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-semibold md:text-lg">Scan</span>
        <Home className="ml-2 size-3 text-neutral-600" />
        <span className="truncate text-xs font-light text-neutral-600">
          / Private Assets /
        </span>
        <span className="text-xs font-medium text-teal-500">New Scan</span>
      </div>

      {/* buttons for export and stop scan */}
      <div className="flex gap-2">
        <button
          className="rounded-md border border-neutral-200 px-4 py-2 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 md:text-sm"
          onClick={() =>
            toast("Report exported", {
              description: "Your report is ready to download.",
            })
          }
        >
          Export Report
        </button>
        <button
          className="rounded-md border border-red-300 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-500 transition-all duration-200 hover:scale-105 active:scale-95 md:text-sm"
          onClick={() =>
            toast.error("Scan stopped", {
              description: "The active scan has been terminated.",
            })
          }
        >
          Stop Scan
        </button>
      </div>
    </div>
  );
};

export default ScanBar;
