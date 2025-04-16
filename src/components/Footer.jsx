import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} College of Engineering and Technology. All rights reserved.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="border-t border-muted-foreground/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="/privacy-policy" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
          <p className="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0">
            Designed and developed by CET IT Department
          </p>
        </div>
      </div>
    </footer>
  );
}
