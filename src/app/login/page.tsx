import { LoginButton } from "@/components/auth/login-button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import { getSession } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const LoginPage = async () => {
    const session = await getSession();

    if (session) redirect("/home");
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle className="text-center ">Sign in to your account</CardTitle>

                    <div className=" py-1 relative text-center text-sm after:absolute 
                   after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center
                    after:border-t after:border-border " >
                    </div>

                    <CardDescription className="text-center">We use Google and GitHub for secure passwordless sign-in</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginButton />
                </CardContent>

                <div className="relative text-center text-sm after:absolute 
                   after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center
                    after:border-t after:border-border " >
                    <span className=" relative z-10 bg-card px-2 text-muted-foreground">T&C</span>
                </div>

                <CardFooter className="text-sm text-muted-foreground">
                    <span>By continuing, you agree to our Terms and acknowledge our <Link className="relative underline" href='/privacy-policy'>Privacy Policy</Link></span>
                </CardFooter>

            </Card>
        </div>
    );
};

export default LoginPage;
