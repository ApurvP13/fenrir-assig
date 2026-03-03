import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="flex h-2 w-3/4 items-start rounded-full bg-neutral-200 dark:bg-neutral-700">
      <div
        className={`h-full rounded-full bg-teal-500`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
