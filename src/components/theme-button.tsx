"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const themes = ["system", "light", "dark"] as const;

export function ThemeButton() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl border bg-background/50 border-border/50 backdrop-blur-sm">
                {themes.map((t) => (
                    <div
                        key={t}
                        className="size-6 rounded-full bg-muted/50 animate-[pulse_2s_ease-in-out_infinite]"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl border bg-background/50 border-border/50 backdrop-blur-sm shadow-sm">
            {themes.map((t) => {
                const isActive = theme === t;
                return (
                    <Button
                        key={t}
                        variant="ghost"
                        onClick={() => setTheme(t)}
                        className={cn(
                            "size-7 p-0 rounded-lg transition-all duration-200 hover:scale-105",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "hover:bg-muted/60 text-muted-foreground hover:text-foreground"
                        )}
                        title={`Switch to ${t} theme`}
                    >
                        {t === "system" && (
                            <svg className="size-4" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                <rect x="7" y="17" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                <circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.6" />
                                <path d="M8 9h8M8 12h6M8 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                            </svg>
                        )}
                        {t === "light" && (
                            <svg className="size-4" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="4" fill="currentColor" />
                                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                    <line x1="12" y1="2" x2="12" y2="4" />
                                    <line x1="12" y1="20" x2="12" y2="22" />
                                    <line x1="4" y1="12" x2="6" y2="12" />
                                    <line x1="18" y1="12" x2="20" y2="12" />
                                    <line x1="6.34" y1="6.34" x2="7.76" y2="7.76" />
                                    <line x1="16.24" y1="16.24" x2="17.66" y2="17.66" />
                                    <line x1="6.34" y1="17.66" x2="7.76" y2="16.24" />
                                    <line x1="16.24" y1="7.76" x2="17.66" y2="6.34" />
                                </g>
                            </svg>
                        )}
                        {t === "dark" && (
                            <svg className="size-4" viewBox="0 0 24 24" fill="none">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                            </svg>
                        )}
                    </Button>
                );
            })}
        </div>
    );
}
