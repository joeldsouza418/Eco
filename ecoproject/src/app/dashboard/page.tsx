'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Dashboard() {
    const [data, setData] = React.useState('');
    const [result, setResult] = React.useState('');
    const router = useRouter();
    const onSubmit = async () => {
        try {
            const response = await axios.post('/api/user/calculate', { number: data });
            setResult(response.data.result.trim());
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}>
                <label>Enter your Bill amount</label>
                <input
                    type="number"
                    name="billAmount"
                    required
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="mt-4 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200"
                >
                    Calculate
                </button>
            </form>
            {result && (
                <p className="mt-4 text-lg font-semibold">
                    Result: {result}
                </p>
            )}
        </div>
    );
}