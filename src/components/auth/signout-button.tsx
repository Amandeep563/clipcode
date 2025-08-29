"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  const router = useRouter();

  const signOut = async () =>
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });

  return (
    <Button onClick={signOut} variant="outline">
      Sign Out
    </Button>
  );
};
