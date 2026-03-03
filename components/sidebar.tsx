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
} from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Image from "next/image";

const Sidebar = () => {
  const tab1 = [
    {
      icon: <LayoutDashboard />,
      title: "Dashboard",
      to: "/dashboard",
    },
    {
      icon: <ClipboardCheck />,
      title: "Projects",
    },
    {
      icon: <ScanText />,
      title: "Scans",
      to: "/scans/1",
    },
    {
      icon: <CalendarCheck2 />,
      title: "Schedule",
    },
  ];
  const tab2 = [
    {
      icon: <BellDot />,
      title: "Notifications",
    },
    {
      icon: <Settings />,
      title: "Settings",
    },
    {
      icon: <Info />,
      title: "Support",
    },
  ];

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-screen w-1/6 flex-col items-start justify-between bg-white p-6 dark:bg-neutral-900">
      {/* div with logo and the tabs */}
      <div className="flex w-full flex-col items-start gap-12">
        {/* logo */}
        <div className="font-mono text-2xl font-bold text-teal-500">
          Acme Inc.
        </div>

        {/* tabs 1 */}
        <div className="flex flex-col gap-4">
          {tab1.map((tab) => (
            <div
              key={tab.title}
              onClick={() => tab.to && router.push(tab.to)}
              className={`text-md flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 ${pathname === tab.to ? "bg-teal/10 text-teal" : "hover:bg-neutral-200 dark:hover:bg-neutral-700"}`}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </div>
          ))}
        </div>

        {/* divider */}
        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-400" />

        {/* tabs 2 */}
        <div className="flex flex-col gap-4">
          {tab2.map((tab) => (
            <div
              key={tab.title}
              className="text-md flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 hover:bg-neutral-800"
            >
              {tab.icon}
              <span>{tab.title}</span>
            </div>
          ))}
        </div>
        <ModeToggle />
      </div>

      {/* div with profile */}
      <div className="w-full border-t border-neutral-200 pt-2 dark:border-neutral-400">
        <div className="flex w-full items-center gap-10">
          <div className="relative size-8 overflow-hidden rounded-full">
            <Image
              src={"https://avatar.vercel.sh/apurv"}
              alt="profile pic"
              fill
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-sm">admin@edu.com</p>
            <p className="text-base">Security Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
