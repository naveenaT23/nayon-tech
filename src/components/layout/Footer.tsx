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
                width={120} 
                height={120} 
                className="logo-img"
              />
              <div className="logo-brand">
                <span className="logo-text">Nayon Tech</span>
                <span className="logo-tagline">We Set Your Tomorrow</span>
              </div>
            </Link>
            <p style={{ marginTop: '1rem' }}>
              Empowering the next generation of businesses through innovative technology solutions.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link href="/services/graphic-design">Graphic Design</Link></li>
              <li><Link href="/services/ai-automation">AI Automation</Link></li>
              <li><Link href="/services/ai-content-creation">AI Content Creation</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact</h4>
            <ul style={{ gap: '0.8rem', display: 'flex', flexDirection: 'column' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <Mail size={14} className="text-primary" />
                <span>tirumalarajunaveena@gmail.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                <Phone size={14} className="text-primary" />
                <span>+91 7569562240</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem' }}>
                <MapPin size={14} className="text-primary" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Pedhagadi VUDA Colony, Pendurthi, Visakhapatnam 531173, Andhra Pradesh</span>
              </li>
            </ul>
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
