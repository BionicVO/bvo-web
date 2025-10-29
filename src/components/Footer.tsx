import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/bionicvo-logo.png";
import "@/styles/style.css";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className="bg-card/50 border-t border-border pt-16 pb-8">
      <div className={`container mx-auto px-4 transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={logo} alt="BionicVO" className="h-12 w-auto" />
            <p className="text-muted-foreground">
              Transform your content with AI-powered voice cloning technology.
            </p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="outline"
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 BionicVO. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
