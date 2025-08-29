"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export const LoginButton = () => {
  const signWithGithub = async () =>
    await authClient.signIn.social({
      callbackURL: "/home",
      provider: "github",
    });
  const signWithGoogle = async () =>
    await authClient.signIn.social({
      callbackURL: "/home",
      provider: "google",
    });
  return (
    <div className="flex items-center justify-between">
      <Button className="w-[45%]" variant="outline" onClick={signWithGithub}>
        <FaGithub />
        Github
      </Button>
      <Button className="w-[45%]" variant="outline" onClick={signWithGoogle}>
        <FaGoogle />
        Google
      </Button>
    </div>
  );
};
