import { SignOutButton } from "@/components/auth/signout-button";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getSession();

  if (!session) redirect("/login");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>This is home page</h1>
      <SignOutButton />
    </div>
  );
};

export default Home;
