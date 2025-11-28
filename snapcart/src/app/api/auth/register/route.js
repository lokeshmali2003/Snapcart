import connectDB from '@/lib/db';
import User from '@/models/user.model';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server'; 
export async function POST(req) {
    try {
        await connectDB();
        const {name , email, password} = await req.json();
         if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }
        const existuser = await User.findOne({email});
        if (existuser) {
            return NextResponse.json(
                { message: "Email is already registered" },
                { status: 400 }
            );
        }
       if(!password || password.length < 6){
            return NextResponse.json(
                { message: "Password must be at least 6 characters" },
                { status: 400 }
            );
        }
       const hashedPassword = await bcrypt.hash(password, 10);
       const user = await User.create({
        name,
        email,
        password: hashedPassword    
         });
       
         return NextResponse.json(
            { message: "User registered successfully", user },
            { status: 200 }
        );

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}