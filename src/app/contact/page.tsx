import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import ScrollIndicator from "@/components/animations/ScrollIndicator";
import { Parallax } from "@/components/animations/Parallax";
import type { Metadata } from "next";
import { Suspense } from "react";
import Starfield from "@/components/animations/Starfield";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nayon Tech. Reach out for inquiries about our AI solutions, cloud services, and digital transformation expertise.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="page-header" style={{ position: "relative", overflow: "hidden", backgroundColor: "#05060a" }}>
        <Starfield />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Parallax offset={60}>
            <Reveal>
              <h1>Connect With Us</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p style={{ color: "var(--text-muted)" }}>Let&apos;s discuss how we can build the future together.</p>
            </Reveal>
            <Reveal delay={0.8}>
              <ScrollIndicator targetId="contact-details" className="relative" />
            </Reveal>
          </Parallax>
        </div>
      </header>

      <section id="contact-full">
        <div className="container">
          <Reveal>
            <Parallax offset={40}>
              <div className="contact-wrapper">
                <div className="contact-info">
                  <div className="contact-card-header" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "2rem", marginBottom: "2rem" }}>
                    <h3 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Get in Touch</h3>
                    <p style={{ color: "var(--text-muted)" }}>
                      Ready to start your digital transformation journey? Fill out the form below or reach out directly via email or phone.
                    </p>
                  </div>
                  
                  <div className="contact-details">
                    <div className="detail-item">
                      <div className="detail-icon"><User size={24} /></div>
                      <div className="detail-text">
                        <h4>Founder & Owner</h4>
                        <p>Naveena Tirumalaraju</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon"><Mail size={24} /></div>
                      <div className="detail-text">
                        <h4>Email</h4>
                        <p>tirumalarajunaveena@gmail.com</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon"><Phone size={24} /></div>
                      <div className="detail-text">
                        <h4>Phone</h4>
                        <p>+91 7569562240</p>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-icon"><MapPin size={24} /></div>
                      <div className="detail-text">
                        <h4>Office</h4>
                        <p>Pedhagadi VUDA Colony, Pendurthi, Visakhapatnam 531173, Andhra Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </Parallax>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="map-placeholder" style={{ height: "450px", overflow: "hidden", padding: 0 }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1145.9344801944308!2d83.180616824361!3d17.796790292518114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1778256648036!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
