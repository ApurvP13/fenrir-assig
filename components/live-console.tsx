"use client";

import { useState } from "react";
type LogEntry = {
  time: string;
  text: string;
  highlight?: { text: string; color: string };
  highlight2?: { text: string; color: string };
  rest?: string;
  sub?: string;
};

const activityLog: LogEntry[] = [
  {
    time: "09:00:00",
    text: "I'll begin a systematic penetration test on ",
    highlight: { text: "helpdesk.democorp.com", color: "text-teal" },
    rest: ". Let me start with reconnaissance and enumeration.",
  },
  {
    time: "09:01:00",
    text: "Good! target is online. Now let me perform port scanning to identify running services.",
  },
  {
    time: "09:02:00",
    text: "Excellent reconnaissance results:",
    sub: "- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)",
  },
  {
    time: "09:03:00",
    text: "Great! I found a login page. I can see a useful comment: ",
    highlight: {
      text: "TODO: Delete the testing account (test:test)",
      color: "text-yellow-400",
    },
    rest: ". The login redirects to ",
    highlight2: {
      text: "/password/test",
      color: "bg-neutral-700 text-neutral-200 px-1 rounded",
    },
  },
  {
    time: "09:04:00",
    text: "The POST method is not allowed on /password/test. It posts to ",
    highlight: { text: "'#'", color: "text-orange-400" },
    rest: " which means the current page.",
  },
  {
    time: "09:05:00",
    text: "It redirects back to /password/test. Let me check if there's an /api endpoint. Also trying ",
    highlight: { text: "test:test", color: "text-orange-400" },
    rest: " credentials.",
  },
  {
    time: "09:06:00",
    text: "Great! I can access the dashboard using the ",
    highlight: {
      text: "'X-UserId: 10032'",
      color: "bg-teal/20 text-teal px-1 rounded",
    },
    rest: " header. This suggests an ",
    highlight2: {
      text: "**IDOR vulnerability**",
      color: "text-red-400 font-bold",
    },
  },
];

const verificationLog: LogEntry[] = [
  {
    time: "09:10:00",
    text: "Running verification loop on ",
    highlight: { text: "/api/users/profile", color: "text-teal" },
    rest: " endpoint.",
  },
  {
    time: "09:11:00",
    text: "Confirmed: SQL injection payload returns database version info.",
  },
  {
    time: "09:12:00",
    text: "Re-testing authentication bypass on ",
    highlight: { text: "/api/auth/login", color: "text-teal" },
    rest: ". Vulnerability persists.",
  },
];

export function LiveConsole() {
  const [activeTab, setActiveTab] = useState<"activity" | "verification">(
    "activity",
  );
  const logs = activeTab === "activity" ? activityLog : verificationLog;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      {/* header */}
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-sm font-medium">Live Scan Console</span>
        </div>
        <span className="text-xs text-neutral-400">⏱ Running...</span>
      </div>

      {/* tabs */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800">
        {(["activity", "verification"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "border-teal text-teal"
                : "border-transparent text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            }`}
          >
            {tab === "activity" ? "Activity Log" : "Verification Loops"}
          </button>
        ))}
      </div>

      {/* log output */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-white p-4 font-mono text-xs dark:bg-neutral-900">
        {logs.map((entry, i) => (
          <div key={i} className="leading-relaxed">
            <span className="text-neutral-500">[{entry.time}]</span>{" "}
            <span className="text-neutral-800 dark:text-neutral-300">
              {entry.text}
            </span>
            {entry.highlight && (
              <span className={entry.highlight.color}>
                {entry.highlight.text}
              </span>
            )}
            {entry.rest && (
              <span className="text-neutral-800 dark:text-neutral-300">
                {entry.rest}
              </span>
            )}
            {entry.highlight2 && (
              <span className={entry.highlight2.color}>
                {entry.highlight2.text}
              </span>
            )}
            {entry.sub && (
              <div className="mt-1 ml-4 text-neutral-500">{entry.sub}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
