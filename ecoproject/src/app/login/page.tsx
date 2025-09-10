'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });
    const router = useRouter();
    const onLogin = async () => {
        try {
            const response = await axios.post('/api/user/login', user);
            console.log(response.data);
            router.push(`/user`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-white text-3xl font-bold mb-8">Login</h1>

            <form
                className="flex flex-col gap-4 p-8 border border-gray-300 rounded-2xl bg-gray-50 min-w-[300px] shadow-md"
                onSubmit={(e) => {
                    e.preventDefault();
                    onLogin();
                }}
            >
                <label className="flex flex-col font-semibold text-black">
                    Email:
                    <input
                        type="email"
                        name="email"
                        required
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <label className="flex flex-col font-semibold text-black">
                    Password:
                    <input
                        type="password"
                        name="password"
                        required
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <button
                    type="submit"
                    className="mt-4 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>
            </form>

            <Link href="/signup" className="mt-4 text-blue-500 hover:underline">
                Don’t have an account? Sign Up
            </Link>
        </div>
    );
}
