"use client";

import Image from "next/image";
import Link from "next/link";
import { UserProfileDropdown } from "./user-profile-dropdown";
import { User } from "@/types/auth";

interface AuthenticatedHeaderProps {
    user: User;
}

export function AuthenticatedHeader({ user }: AuthenticatedHeaderProps) {


    return (
        <header className="w-full">
            <div className="max-w-6xl container mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/clipcode-icon.svg"
                            alt="Clipcode Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 transition-transform duration-200 group-hover:scale-100"
                        />
                        <span className="text-xl font-semibold">clipcode</span>
                    </Link>

                </div>

                <div className="flex items-center  gap-4">
                    <Link
                        href="/snippets"
                        className="opacity-70 hover:opacity-100 duration-300 transition-opacity text-sm font-medium"
                    >
                        snippets
                    </Link>


                    <UserProfileDropdown user={user} />
                </div>
            </div>
        </header>
    );
}
