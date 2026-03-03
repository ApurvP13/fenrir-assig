import ScanBar from "@/components/scan-bar";
import React from "react";
import { ScanProgressBar } from "@/components/scan-progress";
import { LiveConsole } from "@/components/live-console";
import { FindingLog } from "@/components/finding-log";

const page = () => {
  return (
    <section className="flex h-full w-full flex-col gap-4 bg-neutral-100 dark:bg-black">
      <ScanBar />
      <div className="flex h-3/4 flex-col items-center gap-2 px-4">
        <ScanProgressBar />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <LiveConsole />
          <FindingLog />
        </div>
      </div>
    </section>
  );
};

export default page;
