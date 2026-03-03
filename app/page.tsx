"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";

import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <Image
        src={"/login-bg-3.jpg"}
        fill
        alt="login screen bg"
        className="-z-10 object-cover object-center"
      />
      {/* main body div */}
      <div className="flex h-full w-full flex-1 justify-between px-30 py-20">
        {/* left side text */}
        <div className="flex w-3/5 flex-col items-start justify-between text-neutral-100">
          {/* main text */}

          <div className="flex flex-col items-start gap-6">
            <h1 className="text-5xl font-semibold tracking-tight">
              Expert level Cybersecurity <br />
              in <span className="text-teal">hours</span> not weeks.
            </h1>

            {/* what's included */}
            <div className="mt-2 flex flex-col gap-3">
              <p className="text-sm font-medium text-neutral-400">
                What's included
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Effortlessly spider and map targets to uncover hidden security flaws",
                  "Deliver high-quality, validated findings in hours, not weeks.",
                  "Generate professional, enterprise-grade security reports automatically.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-neutral-300"
                  >
                    <span className="mt-0.5 text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* trustpilot */}
          <div className="mt-16 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-green-600">★</span>
              <span className="text-sm text-neutral-300">Trustpilot</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-neutral-100">
                Rated 4.5/5.0
              </span>
              <span className="text-xs text-neutral-300">(100k+ reviews)</span>
            </div>
          </div>
        </div>

        {/* right side card */}
        <div className="flex w-2/5 flex-col items-center justify-center gap-4 rounded-2xl bg-neutral-50 p-8">
          <h1 className="text-5xl font-medium text-neutral-950">Sign Up</h1>
          <p className="text-md font-medium text-neutral-500">
            Already have an account?{" "}
            <span className="cursor-pointer font-semibold text-teal-400 underline decoration-teal-400 underline-offset-1">
              Log in
            </span>
          </p>

          {/* form */}
          <div className="flex w-full flex-col gap-3">
            <input
              type="text"
              placeholder="First name*"
              className="focus:border-teal w-full rounded-sm border border-neutral-300 bg-white px-4 py-4 text-sm text-neutral-600 outline-none"
            />
            <input
              type="text"
              placeholder="Last name*"
              className="focus:border-teal w-full rounded-sm border border-neutral-300 bg-white px-4 py-4 text-sm text-neutral-600 outline-none"
            />

            <input
              type="email"
              placeholder="Email address*"
              className="focus:border-teal w-full rounded-sm border border-neutral-300 bg-white px-4 py-4 text-sm text-neutral-600 outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8+ characters)*"
                className="focus:border-teal w-full rounded-sm border border-neutral-300 bg-white px-4 py-4 text-sm text-neutral-600 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-neutral-700"
              >
                {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* terms */}
            <div className="mt-2 flex items-start gap-2 text-xs text-balance text-neutral-500">
              <Checkbox className="data-[state=checked]:border-teal border-neutral-300 bg-white data-[state=checked]:bg-teal-500" />
              <label htmlFor="">
                I agree to the{" "}
                <span className="cursor-pointer text-blue-500 underline">
                  Terms of Service
                </span>{" "}
                and acknowledge the{" "}
                <span className="cursor-pointer text-blue-500 underline">
                  Privacy Policy
                </span>
              </label>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-teal w-full rounded-full py-3 text-sm font-semibold text-neutral-50 transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-95"
              >
                Create account
              </button>
              <div className="flex w-full gap-4">
                {/* apple */}
                <button className="flex w-1/3 items-center justify-center rounded-full bg-black py-2 text-2xl text-white transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-95">
                  <FaApple />
                </button>
                {/* google */}
                <button className="flex w-1/3 items-center justify-center rounded-full bg-stone-200 py-2 text-2xl text-white transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-95">
                  <FcGoogle />
                </button>
                {/* meta */}
                <button className="flex w-1/3 items-center justify-center rounded-full bg-blue-600 py-2 text-2xl text-white transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-95">
                  <FaMeta />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
