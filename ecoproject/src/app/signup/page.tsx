'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignUp() {
    const router = useRouter();
    const [user, setuser] = React.useState({
        email: '',
        password: '',
        userName: '',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.userName.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    const onSignUp = async () => {
        try {
            const response = await axios.post('/api/user/signup', user);
            // console.log('SignUp success ', response.data)
            router.push('/login');
        }
        catch (error: any) {
            console.log('error signing up', error.message)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <h1 className="text-white text-3xl font-bold mb-8">Signup</h1>

            <form
                className="flex flex-col gap-4 p-8 border border-gray-300 rounded-2xl bg-gray-50 min-w-[300px] shadow-md"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSignUp();
                }}
            >
                <label className="flex flex-col font-semibold text-black">
                    Username:
                    <input
                        type="text"
                        name="userName"
                        required
                        value={user.userName}
                        onChange={(e) => setuser({ ...user, userName: e.target.value })}
                        className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <label className="flex flex-col font-semibold text-black">
                    Email:
                    <input
                        type="email"
                        name="email"
                        required
                        value={user.email}
                        onChange={(e) => setuser({ ...user, email: e.target.value })}
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
                        onChange={(e) => setuser({ ...user, password: e.target.value })}
                        className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <button
                    type="submit"
                    className="mt-4 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200"
                >
                    {buttonDisabled ? 'Please fill all fields' : 'Sign Up'}
                </button>
            </form>
            <Link href='/login' className="mt-4 text-blue-500 hover:underline">Login Page</Link>
        </div>

    );
}