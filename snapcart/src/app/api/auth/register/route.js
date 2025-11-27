import connectDB from '@/lib/db';
export async function POST(req) {
    try {

        await connectDB();
        const {name , email, password} = await req.json();
        const existuser = await User.findOne({email});
        if(existuser){
            return NextResponse.json({message: "Email is already registered"}, {status: 400});  
        }
       if(password.length < 6){
        return NextResponse.json({message: "Password must be at least 6 characters"}, {status: 400});  
       }
        
    } catch (error) {
        
       
    }
}   

await connectDB();
