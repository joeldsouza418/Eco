'use client'
import React from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [data, setData] = React.useState('');
    
    const onsubmit = async (e:any) => {
        e.preventDefault(); // prevent default form submission
        try {
            const response = await axios.post('http://localhost:5000/calculate', { billAmount: parseFloat(data) });
            console.log("Result from Python:", response.data.result);
            alert(`Calculated Result: ${response.data.result}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <form onSubmit={onsubmit}>
                <label className="block mb-2">Enter your Bill amount</label>
                <input
                    type="number"
                    name="billAmount"
                    required
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Calculate
                </button>
            </form>
        </div>
    );
}
