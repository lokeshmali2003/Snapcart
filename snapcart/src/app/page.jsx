import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/db";
import User from "@/models/user.model";
import { redirect } from "next/navigation";
import EditRoleMobile  from "@/components/EditRoleMobile";

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
  const user = await User.findOne({ email: session.user.email });

  // Agar user nahi mila to login page par bhejo
  if (!user) {
    redirect("/login");
  }


const isProfileIncomplete =
  !user.mobile || 
  !user.role;

  if (isProfileIncomplete) {
    return <EditRoleMobile />;
  }

  // Profile complete है to home page dikha
  return (
    <div>
      <h1>Welcome {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Mobile: {user.mobile}</p>
    </div>
  );
}