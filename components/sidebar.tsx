"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BellDot,
  CalendarCheck2,
  ClipboardCheck,
  Info,
  LayoutDashboard,
  ScanText,
  Settings,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const tab1 = [
    {
      icon: <LayoutDashboard size={18} />,
      title: "Dashboard",
      to: "/dashboard",
    },
    { icon: <ClipboardCheck size={18} />, title: "Projects" },
    { icon: <ScanText size={18} />, title: "Scans", to: "/scans/1" },
    { icon: <CalendarCheck2 size={18} />, title: "Schedule" },
  ];

  const tab2 = [
    { icon: <BellDot size={18} />, title: "Notifications" },
    { icon: <Settings size={18} />, title: "Settings" },
    { icon: <Info size={18} />, title: "Support" },
    {
      icon: theme === "dark" ? <Sun size={18} /> : <Moon size={18} />,
      title: theme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const tabClass = (to?: string) =>
    `flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-colors
    ${pathname === to ? "bg-teal/10 text-teal" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"}`;

  return (
    <div className="sticky top-0 flex h-screen w-14 shrink-0 flex-col items-start justify-between overflow-y-auto border-r border-neutral-200 bg-white p-4 sm:w-16 md:w-56 dark:border-neutral-800 dark:bg-neutral-900">
      {/* top section */}
      <div className="flex w-full flex-col items-start gap-8">
        {/* logo */}
        <div className="text-teal hidden px-3 font-mono text-xl font-bold md:block">
          Acme Inc.
        </div>
        {/* logo icon only on mobile */}
        <div className="text-teal px-1 font-mono text-xl font-bold md:hidden">
          A
        </div>

        {/* tabs 1 */}
        <div className="flex w-full flex-col gap-1">
          {tab1.map((tab) => (
            <div
              key={tab.title}
              onClick={() => tab.to && router.push(tab.to)}
              className={tabClass(tab.to)}
              title={tab.title}
            >
              <span className="shrink-0">{tab.icon}</span>
              <span className="hidden text-sm md:block">{tab.title}</span>
            </div>
          ))}
        </div>

        {/* divider */}
        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />

        {/* tabs 2 */}
        <div className="flex w-full flex-col gap-1">
          {tab2.map((tab) => (
            <div
              key={tab.title}
              onClick={tab.onClick}
              className={tabClass()}
              title={tab.title}
            >
              <span className="shrink-0">{tab.icon}</span>
              <span className="hidden text-sm md:block">{tab.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* profile */}
      <div className="w-full border-t border-neutral-200 pt-4 dark:border-neutral-800">
        <div className="flex items-center gap-3 px-1">
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image
              src={"https://avatar.vercel.sh/apurv"}
              alt="profile pic"
              fill
            />
          </div>
          <div className="hidden flex-col md:flex">
            <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">
              admin@edu.com
            </p>
            <p className="text-xs text-neutral-500">Security Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
