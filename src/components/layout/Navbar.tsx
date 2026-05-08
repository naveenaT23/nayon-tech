"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="container nav-content">
        <Link href="/" className="logo">
          <Image 
            src="/logo.png" 
            alt="Nayon Tech Logo" 
            width={150} 
            height={150} 
            priority
            className="logo-img"
          />
          <div className="logo-brand">
            <span className="logo-text">Nayon Tech</span>
            <span className="logo-tagline">We Set Your Tomorrow</span>
          </div>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path)) ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
