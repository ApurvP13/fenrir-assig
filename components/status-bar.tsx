import { RefreshCw, Ban, AlertTriangle, Search } from "lucide-react";

const meta = [
  { label: "Org", value: "Project X" },
  { label: "Owner", value: "Nammagiri" },
  { label: "Total Scans", value: "100" },
  { label: "Scheduled", value: "1000" },
  { label: "Rescans", value: "100" },
  { label: "Failed Scans", value: "100" },
];

const severities = [
  {
    label: "Critical Severity",
    icon: <Ban className="h-4 w-4 text-pink-500" />,
    iconBg: "bg-pink-100 dark:bg-pink-500/10",
    count: 86,
    change: "+2%",
    direction: "up",
    color: "text-red-500",
  },
  {
    label: "High Severity",
    icon: <AlertTriangle className="h-4 w-4 text-orange-500" />,
    iconBg: "bg-orange-100 dark:bg-orange-500/10",
    count: 16,
    change: "+0.9%",
    direction: "up",
    color: "text-red-500",
  },
  {
    label: "Medium Severity",
    icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    iconBg: "bg-yellow-100 dark:bg-yellow-500/10",
    count: 26,
    change: "+0.9%",
    direction: "down",
    color: "text-green-500",
  },
  {
    label: "Low Severity",
    icon: <Search className="h-4 w-4 text-blue-500" />,
    iconBg: "bg-blue-100 dark:bg-blue-500/10",
    count: 16,
    change: "+0.9%",
    direction: "up",
    color: "text-red-500",
  },
];

export function StatusBar() {
  return (
    <div className="mx-4 mt-1 flex flex-col rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      {/* meta row — scrollable on mobile */}
      <div className="scrollbar-none flex items-center gap-4 overflow-x-auto px-6 py-3 text-sm">
        {meta.map((item, i) => (
          <div key={item.label} className="flex shrink-0 items-center gap-4">
            <span className="whitespace-nowrap text-neutral-500">
              {item.label}:{" "}
              <span className="font-bold text-neutral-900 dark:text-neutral-100">
                {item.value}
              </span>
            </span>
            {i < meta.length - 1 && (
              <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700" />
            )}
          </div>
        ))}
        <div className="text-teal ml-auto flex shrink-0 items-center gap-1.5">
          <RefreshCw className="h-3.5 w-3.5" />
          <span className="text-xs whitespace-nowrap">10 mins ago</span>
        </div>
      </div>

      {/* severity row — 2 cols on mobile, 4 on md+ */}
      <div className="grid grid-cols-2 divide-x divide-y divide-neutral-200 border-t border-neutral-200 md:grid-cols-4 md:divide-y-0 dark:divide-neutral-800 dark:border-neutral-800">
        {severities.map((s) => (
          <div key={s.label} className="flex flex-col gap-2 p-4 md:px-6">
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500 md:text-sm">
                {s.label}
              </span>
              <div className={`rounded-md p-1 ${s.iconBg}`}>{s.icon}</div>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900 md:text-3xl dark:text-neutral-100">
                {s.count}
              </span>
              <span className={`text-xs ${s.color}`}>
                {s.direction === "up" ? "↑" : "↓"} {s.change}{" "}
                {s.direction === "up" ? "increase" : "decrease"} than yesterday
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
