import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/db";
import User from "@/models/user.model";
import { redirect } from "next/navigation";
import EditRoleMobile  from "@/components/EditRoleMobile";
import Nav from "@/components/Nav";

export default async function Home() {
  // DB connect करो
  await connectDB();

  // Session get करो
  const session = await getServerSession(authOptions);

  // Agar session nahi hai to login page par bhejo
  if (!session || !session.user?.email) {
    redirect("/login");
  }

  // User ko database se find करो
  const userDoc = await User.findOne({ email: session.user.email });

  // Agar user nahi mila to login page par bhejo
  if (!userDoc) {
    redirect("/login");
  }

  // Mongoose document को plain object में convert करो
  const user = {
    name: userDoc.name,
    email: userDoc.email,
    role: userDoc.role,
    mobile: userDoc.mobile,
    image: userDoc.image
  };

const isProfileIncomplete =
  !user.mobile || 
  !user.role;

  if (isProfileIncomplete) {
    return <EditRoleMobile />;
  }

  // Profile complete है to home page dikha
  return (
    <div>
     <Nav user={user} />
    </div>
  );
}