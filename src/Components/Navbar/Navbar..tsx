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
      scrolled ? "bg-gray-900/95 shadow-lg backdrop-blur-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold text-white">
              Car<span className="text-red-500">Mechanics</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/re-sell" 
              className={`text-base font-medium transition-all hover:text-red-500 ${
                pathname === "/re-sell" ? "text-red-500" : "text-gray-200"
              }`}
            >
              Re-sell
            </Link>
            <Link 
              href="/expertise" 
              className={`text-base font-medium transition-all hover:text-red-500 ${
                pathname === "/expertise" ? "text-red-500" : "text-gray-200"
              }`}
            >
              Expertise
            </Link>
            <Link 
              href="/about" 
              className={`text-base font-medium transition-all hover:text-red-500 ${
                pathname === "/about" ? "text-red-500" : "text-gray-200"
              }`}
            >
              About
            </Link>
            <Link 
              href="/book-service"
              className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-red-500/30"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-4 py-6 space-y-6">
              <Link 
                href="/re-sell"
                className={`block text-lg font-medium transition-colors hover:text-red-500 ${
                  pathname === "/re-sell" ? "text-red-500" : "text-gray-200"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Re-sell
              </Link>
              <Link 
                href="/expertise"
                className={`block text-lg font-medium transition-colors hover:text-red-500 ${
                  pathname === "/expertise" ? "text-red-500" : "text-gray-200"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Expertise
              </Link>
              <Link 
                href="/about"
                className={`block text-lg font-medium transition-colors hover:text-red-500 ${
                  pathname === "/about" ? "text-red-500" : "text-gray-200"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/book-service"
                className="block w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-center font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200"
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
