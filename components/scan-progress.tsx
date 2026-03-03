"use client";

import { Circle } from "lucide-react";

const steps = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];

const metadata = [
  { label: "Scan Type", value: "Grey Box" },
  { label: "Targets", value: "google.com" },
  { label: "Started At", value: "Nov 22, 09:00AM" },
  { label: "Credentials", value: "2 Active" },
  { label: "Files", value: "Control.pdf" },
  { label: "Checklists", value: "40/350", highlight: true },
];

export function ScanProgressBar() {
  const activeStep = 0;

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
      {/* top row: circle + steps */}
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        {/* circular progress */}
        <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-neutral-800 bg-neutral-900">
          <span className="text-teal text-xl font-bold">0%</span>
          <span className="text-xs text-neutral-400">In Progress</span>
        </div>

        {/* step tracker */}
        <div className="flex w-full flex-1 items-center">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    i === activeStep
                      ? "border-teal bg-teal/10 text-teal"
                      : i < activeStep
                        ? "border-teal bg-teal text-white"
                        : "border-neutral-300 text-neutral-400 dark:border-neutral-700"
                  }`}
                >
                  <Circle className="h-4 w-4" />
                </div>
                <span
                  className={`text-xs ${i === activeStep ? "text-teal" : "text-neutral-400"}`}
                >
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mb-5 h-px flex-1 ${i < activeStep ? "bg-teal" : "bg-neutral-200 dark:bg-neutral-700"}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* metadata row */}
      <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4 sm:grid-cols-3 lg:grid-cols-6 dark:border-neutral-800">
        {metadata.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400">{item.label}</span>
            <span
              className={`text-sm font-semibold ${item.highlight ? "text-teal" : "text-neutral-900 dark:text-neutral-100"}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
