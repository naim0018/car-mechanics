"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Car Mechanics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/re-sell" 
              className="text-white hover:text-red-500 transition-colors relative group"
            >
              Re-sell
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all ${
                pathname === "/Re-sell" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link 
              href="/expertise" 
              className="text-white hover:text-red-500 transition-colors relative group"
            >
              Expertise
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all ${
                pathname === "/expertise" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-red-500 transition-colors relative group"
            >
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all ${
                pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link 
              href="/book-service"
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transform hover:scale-105 transition-all"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/Re-sell"
                className={`block text-white hover:text-red-500 transition-colors ${
                  pathname === "/Re-sell" ? "text-red-500" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Re-sell
              </Link>
              <Link 
                href="#expertise"
                className={`block text-white hover:text-red-500 transition-colors ${
                  pathname === "#expertise" ? "text-red-500" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Expertise
              </Link>
              <Link 
                href="#about"
                className={`block text-white hover:text-red-500 transition-colors ${
                  pathname === "#about" ? "text-red-500" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#contact"
                className="block px-6 py-2 bg-red-600 text-white text-center rounded-full hover:bg-red-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
