'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Dashboard() {
    const [data, setData] = React.useState('');
    const router = useRouter();
    const onsubmit = async () => {
        try {
            const response = await axios.post('/api/user/calculate', data);
            console.log("Result from Python:", response.data.result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <form>
                <label>Enter your Bill amount</label>
                <input
                        type="number"
                        name="billAmount"
                        required
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
            </form>
        </div>
    );
}