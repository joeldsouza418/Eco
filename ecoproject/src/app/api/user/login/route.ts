import { connect } from '@/dbconfig/dbconfig';
import User from '@/models/models';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect()

export async function POST(request: NextRequest) {
    const rebody = await request.json();
    const { email, password } = rebody;
    //checking if user already existingUser
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
        console.log('User')
    }
    const validpassword = await bcrypt.compare(password, existingUser.password);
    if (!validpassword) {
        console.log('Invalid password');
    }

    const tokenData = {
        id: existingUser._id,
        username: existingUser.userName,
        email: existingUser.email
    }
    //creating token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1h' });

    const response = NextResponse.json({ message: 'Login successful', token }, { status: 200 });
    response.cookies.set('token', token, {
        httpOnly: true,
    });
    return response;
}