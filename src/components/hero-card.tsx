import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroCard = () => {
    return (

        <div className="space-y-4">
            <div className="bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Implement a union type of number and string</h3>
                        <Badge className="bg-difficulty-easy/20 text-difficulty-easy border-difficulty-easy/30">
                            EASY
                        </Badge>
                        <span className="ml-2 text-sm text-muted-foreground">@bigmang</span>
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
                        <span className="ml-2 text-sm text-muted-foreground">@matt</span>
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
    )
};

export default HeroCard;

