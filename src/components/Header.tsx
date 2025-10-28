import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/x402-logo.png";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="x402 Logo" className="h-14 w-auto" />
            <div>
              <h1 className="text-3xl font-bold text-gradient">Atlas</h1>
              <p className="text-sm text-muted-foreground">x402</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://x.com/atlasx402"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://github.com/AtlasX402"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">Contribute</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
