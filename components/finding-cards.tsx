type Severity = "Critical" | "High" | "Medium" | "Low";

const severityStyles: Record<Severity, string> = {
  Critical: "bg-red-500 text-white",
  High: "bg-orange-500 text-white",
  Medium: "bg-yellow-500 text-white",
  Low: "bg-green-500 text-white",
};

interface FindingCardProps {
  severity: Severity;
  time: string;
  title: string;
  endpoint: string;
  description: string;
}

export function FindingCard({
  severity,
  time,
  title,
  endpoint,
  description,
}: FindingCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-md px-2 py-0.5 text-xs font-semibold ${severityStyles[severity]}`}
        >
          {severity}
        </span>
        <span className="font-mono text-xs text-neutral-400">{time}</span>
      </div>
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <span className="text-teal font-mono text-xs font-bold">{endpoint}</span>
      <p className="text-xs leading-relaxed text-neutral-500">{description}</p>
    </div>
  );
}
