import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const LandingPage = async () => {
  const session = await getSession();

  if (session) redirect("/home");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>This is Landing Page</h1>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
