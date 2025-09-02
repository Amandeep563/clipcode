"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { LoginButton } from "./login-button";
import Link from "next/link";

interface LoginModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center ">Sign in to your account</DialogTitle>

                    <div className=" py-1 relative text-center text-sm after:absolute 
                   after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center
                    after:border-t after:border-border " >
                    </div>

                    <DialogDescription className="text-center">We use Google and GitHub for secure passwordless sign-in</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <LoginButton />
                </div>

                <div className="relative text-center text-sm after:absolute 
                   after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center
                    after:border-t after:border-border " >
                    <span className=" relative z-10 bg-card px-2 text-muted-foreground">T&C</span>
                </div>

                <DialogFooter className="text-sm text-muted-foreground">
                    <span>By continuing, you agree to our Terms and acknowledge our <Link className="relative underline" href='/privacy-policy'>Privacy Policy</Link></span>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};