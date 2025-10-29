import {Profiler, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import logo from "@/assets/bionicvo-logo.png";
import "@/styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
    const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="BionicVO" className="h-12 w-auto animate-pulse-glow hand-point" onClick={() => navigate("/")} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#actors" className="text-foreground hover:text-primary transition-colors">
              Voice Actors
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
              <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="border-border hover:bg-accent/10"
              >
                  {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                  ) : (
                      <Moon className="h-5 w-5" />
                  )}
              </Button>
              <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate("/login")}
                  className="border-border hover:bg-accent/10"
              >
                      <LogIn  className="h-5 w-5" />
              </Button>
            <Button className="bg-primary hover:bg-primary/90 glow-effect" onClick={() => navigate("/signup")}>
              Get Started
            </Button>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-border hover:bg-accent/10"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
              <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate("/login")}
                  className="border-border hover:bg-accent/10"
              >
                  <LogIn  className="h-5 w-5" />
              </Button>
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in border-line">
            <a
              href="#services"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#actors"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Voice Actors
            </a>
            <a
              href="#features"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#faq"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 glow-effect" onClick={() => navigate("/signup")}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
