import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Github, Zap, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">

                        <Button variant="outline" className="w-fit border-border hover:border-primary transition-all duration-300">
                            <Star className="mr-2 h-4 w-4" />
                            <Link href="https://github.com/Amandeep563/clipcode" target="_blank">star us on GitHub</Link>

                        </Button>


                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <Image src="/clipcode-icon.svg" alt="Clipcode Icon" width={80} height={80} />
                                </div>
                                <h1 className="text-6xl lg:text-7xl font-bold">

                                    <span className=" bg-clip-text ">clip</span>
                                    <span className="text-foreground">code</span>
                                </h1>
                            </div>

                            <h2 className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                                Connect, collaborate, and grow with a community of developers.
                                Elevate your skills through interactive code snippets, discussions,
                                and knowledge sharing.
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className=" hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
                                <Zap className="mr-2 h-5 w-5" />
                                <Link href="/snippets">Explore</Link>
                            </Button>
                            <Button variant="outline" className="border-border hover:border-primary transition-all duration-300 text-lg px-8 py-6">
                                <Github className="mr-2 h-5 w-5" />
                                <Link href="https://github.com/Amandeep563/clipcode" target="_blank">GitHub</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center space-x-8 pt-8">
                            <div className="flex items-center space-x-2">
                                <Users className="h-5 w-5 text-primary" />
                                <span className="text-sm text-muted-foreground">10k+ developers</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <span className="text-sm text-muted-foreground">50k+ snippets</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Feature cards */}
                    <div className="space-y-4">
                        <div className="bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 group">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Implement a union type of number and string</h3>
                                    <Badge className="bg-difficulty-easy/20 text-difficulty-easy border-difficulty-easy/30">
                                        EASY
                                    </Badge>
                                    <span className="ml-2 text-sm text-muted-foreground">@aman</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm mb-4">
                                Create a TypeScript union type that accepts both numbers and strings
                            </p>
                            <div className="bg-code-bg rounded-lg p-4 border border-code-border">
                                <div className="space-y-2 font-mono text-sm">
                                    <div className="flex space-x-4">
                                        <span className="text-muted-foreground">1</span>
                                        <span className="text-code-text">type StringOrNumber = string | number;</span>
                                    </div>
                                    <div className="flex space-x-4">
                                        <span className="text-muted-foreground">2</span>
                                        <span className="text-code-text">const value: StringOrNumber = "hello";</span>
                                    </div>
                                    <div className="flex space-x-4">
                                        <span className="text-muted-foreground">3</span>
                                        <span className="text-code-text">const number: StringOrNumber = 42;</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 group">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">String to Number Conversion</h3>
                                    <Badge className="bg-difficulty-hard/20 text-difficulty-hard border-difficulty-hard/30">
                                        HARD
                                    </Badge>
                                    <span className="ml-2 text-sm text-muted-foreground">@shank</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm mb-4">
                                Convert a string literal to a number type using TypeScript
                            </p>
                            <div className="bg-code-bg rounded-lg p-4 border border-code-border">
                                <div className="space-y-1 font-mono text-xs">
                                    <div className="h-2 bg-muted/30 rounded"></div>
                                    <div className="h-2 bg-muted/20 rounded w-3/4"></div>
                                    <div className="h-2 bg-muted/40 rounded w-1/2"></div>
                                    <div className="h-2 bg-primary/30 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button variant="ghost" className="text-primary hover:text-primary-glow transition-colors">
                                + many features, wow
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="text-center mt-20">
                    <h3 className="text-3xl font-bold mb-4">What's in ClipCode?</h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover thousands of code snippets, collaborate with developers worldwide,
                        and build your programming knowledge one snippet at a time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
