"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeButton } from "./theme-button";
import { LogOut } from "lucide-react";
import { AuthenticatedHeader } from "./authenticated-header";
import { User } from "@/types/auth";
import { LoginModal } from "./auth/login-modal";
import { useState } from "react";

interface HeaderProps {
    isLoggedIn?: boolean;
    user?: User;
}

export function Header({ isLoggedIn = false, user }: HeaderProps) {
    const [open, setOpen] = useState(false)

    if (isLoggedIn && user) {
        return <AuthenticatedHeader user={user} />;
    }

    return (
        <header className="w-full">
            <LoginModal open={open} onOpenChange={setOpen} />
            <div className="max-w-6xl container mx-auto px-4 py-4 flex justify-between items-center">

                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/clipcode-icon.svg"
                        alt="Clipcode Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8 transition-transform duration-200 group-hover:scale-105"
                    />
                    <span className="text-xl font-semibold">clipcode</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="/snippets"
                        className="opacity-70 hover:opacity-100 duration-300 transition-opacity text-sm font-medium max-sm:hidden"
                    >
                        <span className="group-hover:opacity-100 opacity-0 duration-300">/</span>snippets
                    </Link>

                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted/60 transition-colors duration-200 border border-border/50 hover:border-border"
                    >
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm font-medium">Login</span>
                    </button>

                    <ThemeButton />
                </div>
            </div>
        </header>
    );
}
