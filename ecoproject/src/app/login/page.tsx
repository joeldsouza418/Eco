"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Leaf,
    TrendingDown,
    TrendingUp,
    Car,
    Zap,
    Home,
    ShoppingBag,
    Lightbulb,
    Target,
    Award,
    Calendar,
} from "lucide-react"

export default function LoginPage() {
    const [user, setUser] = useState({ email: "", password: "" });

    const onLogin = () => {
        console.log("Login attempted:", user);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md p-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30"
            >
                {/* Heading */}
                <h1 className="text-center text-white text-3xl font-extrabold mb-8">
                    Welcome Back
                </h1>
                <Calendar className="mx-auto mb-6 text-white" size={48} />

                {/* Login Form */}
                <form
                    className="flex flex-col gap-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onLogin();
                    }}
                >
                    {/* Email Input */}
                    <div className="flex flex-col">
                        <label className="text-white font-medium mb-2">Email</label>
                        <input
                            type="email"
                            required
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Enter your email"
                            className="p-3 rounded-lg border border-white/40 bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col">
                        <label className="text-white font-medium mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Enter your password"
                            className="p-3 rounded-lg border border-white/40 bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Login Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="mt-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:opacity-90 transition-all duration-300"
                    >
                        Login
                    </motion.button>
                </form>

                {/* Sign up link */}
                <p className="text-center text-white mt-6">
                    Don’t have an account?{" "}
                    <Link
                        href="/signup"
                        className="font-semibold text-yellow-300 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}
