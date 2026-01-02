import ConnectDB from "@/lib/db";
import {NextResponse , NextRequest} from "next/server";
import { auth } from "@/auth";

export async function POST(req) {
    try {
        await ConnectDB();
        const session = await auth();
        if(session?.user?.role !== "admin"){
            return NextResponse.json({message: "You Are Not Admin"}, {status: 400});
        }
        const formData = await req.formData();
        const name = formData.get("name");
        const price = formData.get("price");
        const category = formData.get("category");
        const unit = formData.get("unit");
        const file = formData.get("file"); // image file
        if(file){
            const image = await cloudinary.uploader.upload(file, {
                folder: "grocery",
                resource_type: "image",
            });
        }
        const grocery = await Grocery.create({
            name,
            price,
            category,
            unit,
            image: image?.secure_url,
        });
        return NextResponse.json({message: "Grocery Added Successfully", grocery}, {status: 200});
    } catch (error) {

    }}