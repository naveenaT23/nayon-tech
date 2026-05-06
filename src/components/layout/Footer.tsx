"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your newsletter subscription has been received.");
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <Link href="/" className="logo">
              <Image 
                src="/logo.png" 
                alt="Nayon Tech Logo" 
                width={200} 
                height={65} 
                className="logo-img"
                style={{ objectFit: "contain", marginBottom: "0.5rem" }}
              />
            </Link>
            <p style={{ marginTop: '1rem' }}>
              Empowering the next generation of businesses through innovative technology solutions.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">UI/UX Design</Link></li>
              <li><Link href="/services">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact</h4>
            <ul style={{ gap: '0.8rem', display: 'flex', flexDirection: 'column' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Mail size={14} className="text-primary" />
                <span>tirumalarajunaveena@gmail.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Phone size={14} className="text-primary" />
                <span>+91 7569562240</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <MapPin size={14} className="text-primary" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Pedhagadi VUDA Colony, Pendurthi, Visakhapatnam 531173, Andhra Pradesh</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Newsletter</h4>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "5px", marginTop: "1rem" }}>
              <input
                type="email"
                placeholder="Email"
                required
                style={{
                  padding: "0.5rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border-color)",
                  color: "white",
                  width: "100%",
                }}
              />
              <button
                type="submit"
                style={{ background: "var(--primary)", padding: "0.5rem", display: "flex", alignItems: "center" }}
              >
                <Send size={16} color="black" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nayon Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
