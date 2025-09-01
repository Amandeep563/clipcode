import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AuthHeader } from "@/components/auth-header";
import Hero from "@/components/hero";

const LandingPage = async () => {
    const session = await getSession();

    if (session) redirect("/home");

    return (
        <div className="min-h-screen bg-background">
            <AuthHeader />
            <Hero />
        </div>
    );
};

export default LandingPage;
