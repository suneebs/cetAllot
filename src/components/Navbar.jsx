import React, { useState, useEffect } from "react"; // Import useEffect
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
  const [lastScrollY, setLastScrollY] = useState(0); // Declare state for scroll position
  const [scrollingDown, setScrollingDown] = useState(false); // Declare state for scrolling direction
  const location = useLocation();
  const pathname = location.pathname;

  // Scroll hide-on-down effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true); // Scrolling down
      } else {
        setScrollingDown(false); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`bg-background sticky top-0 z-50 ${scrollingDown ? "hidden" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="font-bold text-2xl">CET</span>
            <span className="text-sm font-semibold hidden sm:inline-block">PhD Admissions</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <ThemeToggle />
          <Link to="/apply">
            <Button>Apply Now</Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline">Admin Login</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/95">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between p-4">
                <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <span className="font-bold text-2xl">CET</span>
                  <span className="text-sm font-semibold">PhD Admissions</span>
                </Link>
                <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        pathname === item.href
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
