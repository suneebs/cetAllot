import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

// Add CSS for hiding scrollbars
const scrollbarStyles = `
  .hide-scrollbar {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

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
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Inject the scrollbar hiding styles
  useEffect(() => {
    if (!document.getElementById("hide-scrollbar-styles")) {
      const styleElement = document.createElement("style");
      styleElement.id = "hide-scrollbar-styles";
      styleElement.innerHTML = scrollbarStyles;
      document.head.appendChild(styleElement);
    }

    document.body.classList.add("hide-scrollbar");

    return () => {
      // Optional: Remove on unmount
      // document.body.classList.remove("hide-scrollbar");
    };
  }, []);

  // Improved scroll handling with requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        // Use requestAnimationFrame to limit updates
        window.requestAnimationFrame(() => {
          setIsAtTop(window.scrollY === 0);
          lastScrollY.current = window.scrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Initial check
    setIsAtTop(window.scrollY === 0);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore the scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }

    return () => {
      // Cleanup in case component unmounts while menu is open
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`bg-background sticky top-0 z-40 transition-transform duration-300 ${
          isAtTop ? "translate-y-0" : "-translate-y-full"
        } ${mobileMenuOpen ? "hidden lg:block" : ""}`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="font-bold text-2xl">CET</span>
              <span className="text-sm font-semibold hidden sm:inline-block">
                PhD Admissions
              </span>
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
                className={`relative text-sm font-semibold leading-6 transition-all duration-200 
           after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
           after:bg-primary after:transition-all after:duration-300 hover:after:w-full
           ${
             pathname === item.href
               ? "text-primary font-bold"
               : "text-muted-foreground hover:text-primary"
           }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <Link to="/apply">
              <Button>Apply Now</Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline">Admin Login</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background hide-scrollbar">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                to="/"
                className="-m-1.5 p-1.5 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-bold text-2xl">CET</span>
                <span className="text-sm font-semibold">PhD Admissions</span>
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-3 text-base font-semibold leading-7 ${
                      pathname === item.href
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Footer Actions */}
              <div className="mt-8 flex flex-col gap-4">
                <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Apply Now</Button>
                </Link>
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Admin Login
                  </Button>
                </Link>
                <div className="flex justify-center mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
