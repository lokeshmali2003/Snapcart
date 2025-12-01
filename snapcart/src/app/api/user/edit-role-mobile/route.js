import connectDB from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
export async function POST(req) {
try{
    await connectDB();
    const {role , mobile} = await req.json();
    const session = await authOptions()
    const user = User.findOneAndUpdate({email : session?.user.email},{role , mobile})
    if(!user){
        return NextResponse.json(
            {message:"User Not Found"},
            {status:400}
        )
    }
    return NextResponse.json(
        user, 
        {status:200}
    )
}
catch(error){
    return NextResponse.json(
        {message:`edit role  and mobile error ${error}`},
        {status:500}
    )
}
}