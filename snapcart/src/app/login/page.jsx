"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import google from "@/assets/google.png";
import { motion } from "motion/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const session = useSession();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/", 
    });

    if (res?.error) {
      alert(res.error);
    } else {
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white">
      <div className="mt-6 w-full max-w-md bg-green-50 p-8 rounded-lg shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-green-700 text-center"
        >
          Login
        </motion.h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-green-500"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-green-500"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label className="ml-2 text-gray-700 cursor-pointer">
                Show Password
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <div className="flex items-center justify-center my-2">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-2 text-gray-500">OR</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>

          <button className="w-full text-gray-600 border py-2 rounded-md" onClick={() => signIn("google")}>
            <Image
              src={google}
              width={20}
              height={20}
              alt="Google"
              className="inline-block mr-2"
            />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <span
            className="text-green-600 font-bold cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
