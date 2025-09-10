"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Eye, EyeOff } from "lucide-react"
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false)
    const [user, setuser] = useState({
        email: '',
        password: '',
        userName: '',
    });

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
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Leaf className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold text-foreground">EcoTracker</h1>
                    </div>
                    <CardTitle className="text-2xl">Create Account</CardTitle>
                    <CardDescription>Join the community and start tracking your carbon footprint</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        className="flex flex-col gap-4 p-8 border border-gray-300 rounded-2xl bg-gray-50 min-w-[300px] shadow-md"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSignUp();
                        }}
                    >
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={user.userName}
                                onChange={(e) => setuser({ ...user, userName: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={user.email}
                                onChange={(e) => setuser({ ...user, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    value={user.password}
                                    onChange={(e) => setuser({ ...user, password: e.target.value })}
                                    required
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-muted-foreground" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        <Button type="submit"
                            className="w-full">
                            Create Account
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">Already have an account? </span>
                        <Link href="/login" className="text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
