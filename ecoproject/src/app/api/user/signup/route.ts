import { connect } from '@/dbconfig/dbconfig';
import User from '@/models/models';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';


connect();

export async function POST(request: NextRequest) {
    const reBody = await request.json();
    const { email, password, userName } = reBody;
    //check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email,
        password: hashedPassword,
        userName
    });
    await newUser.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}
