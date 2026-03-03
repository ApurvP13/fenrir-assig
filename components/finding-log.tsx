import { FindingCard } from "./finding-cards";

const findings = [
  {
    severity: "Critical" as const,
    time: "10:45:23",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    severity: "High" as const,
    time: "10:45:23",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    severity: "Medium" as const,
    time: "10:45:23",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
];

export function FindingLog() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      <div className="border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
        <span className="text-sm font-medium">Finding Log</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
        {findings.map((f, i) => (
          <FindingCard key={i} {...f} />
        ))}
      </div>
    </div>
  );
}
