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
    <div className="mx-4 mt-1 flex h-1/4 flex-col justify-center rounded-2xl border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      {/* meta row */}
      <div className="flex items-center gap-4 px-6 py-3 text-sm">
        {meta.map((item, i) => (
          <div key={item.label} className="flex items-center gap-10">
            <span className="text-neutral-500">
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
        <div className="text-teal ml-auto flex items-center gap-1.5">
          <RefreshCw className="h-3.5 w-3.5" />
          <span className="text-xs">10 mins ago</span>
        </div>
      </div>

      {/* severity row */}
      <div className="grid grid-cols-4 px-6 py-4 dark:divide-neutral-800">
        {severities.map((s) => (
          <div key={s.label} className="flex flex-col gap-2 px-6 first:pl-0">
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-500">{s.label}</span>
              <div className={`rounded-md p-1 ${s.iconBg}`}>{s.icon}</div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
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
