import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AuthHeader } from "@/components/auth-header";

const Home = async () => {
    const session = await getSession();

    if (!session) redirect("/");
    return (
        <div className="min-h-screen bg-background">
            <AuthHeader />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold">Welcome to clipcode</h1>
                <p className="text-muted-foreground mt-2">
                    Start sharing and organizing your code snippets.
                </p>
            </div>
        </div>
    );
};

export default Home;
