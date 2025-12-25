import connectDB from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
        
        // Get session from request
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.email) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }
        
        const { role, mobile } = await req.json();
        
        // ✅ Add await here - this was missing!
        const user = await User.findOneAndUpdate(
            { email: session.user.email },
            { role, mobile },
            { new: true }
        );
        
        if (!user) {
            return NextResponse.json(
                { message: "User Not Found" },
                { status: 404 }
            );
        }
        
        return NextResponse.json(
            { message: "Profile updated successfully", user },
            { status: 200 }
        );
    } catch (error) {
        console.error("Edit role and mobile error:", error);
        return NextResponse.json(
            { message: `Edit role and mobile error: ${error.message}` },
            { status: 500 }
        );
    }
}