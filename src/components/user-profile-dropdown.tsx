"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { User, Settings, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/theme-button";
import { User as UserType } from "@/types/auth";
import { SignOutButton } from "@/components/auth/signout-button";

interface UserProfileDropdownProps {
    user: UserType;
}

export function UserProfileDropdown({ user }: UserProfileDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                variant="ghost"
                size="sm"
                onClick={toggleDropdown}
                className="h-10 w-10 rounded-full p-0 hover:bg-muted/60 transition-colors"
                aria-label="Open user menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {user.image ? (
                    <Image
                        src={user.image}
                        alt={`${user.name}'s profile picture`}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                )}
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-12 w-64 rounded-lg border bg-card shadow-lg backdrop-blur-sm z-50">

                    <div className="p-4 border-b border-border/50">
                        <div className="flex items-center gap-3">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={`${user.name}'s profile picture`}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                            ) : (
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-lg font-medium text-primary">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground truncate">{user.name}</p>
                                <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-2">
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 h-10 px-3"
                            onClick={() => setIsOpen(false)}
                        >
                            <User className="h-4 w-4" />
                            Profile
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 h-10 px-3"
                            onClick={() => setIsOpen(false)}
                        >
                            <Settings className="h-4 w-4" />
                            Settings
                        </Button>

                        <div className="px-3 py-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Palette className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">Theme</span>
                                </div>
                                <ThemeButton />
                            </div>
                        </div>

                        <div className="w-full justify-start gap-3 h-10 px-3 text-destructive  transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                            <SignOutButton />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
