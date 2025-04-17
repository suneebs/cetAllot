import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Admission", href: "/admission" },
  { name: "Eligibility", href: "/eligibility" },
  { name: "Forms", href: "/forms" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-background/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-transform duration-300 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl">CET</span>
          <span className="text-sm font-semibold hidden sm:inline">PhD Admissions</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/apply">
            <Button size="sm">Apply Now</Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline" size="sm">
              Admin Login
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md animate-fadeIn">
          <div className="flex justify-between items-center px-4 py-3 border-b border-muted">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl">CET</span>
              <span className="text-sm font-semibold">PhD Admissions</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Apply Now</Button>
              </Link>
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Admin Login
                </Button>
              </Link>
              <div className="flex justify-center mt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
