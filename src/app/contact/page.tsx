import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nayon Tech. Reach out for inquiries about our AI solutions, cloud services, and digital transformation expertise.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <Reveal>
            <h1>Connect With Us</h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ color: "var(--text-muted)" }}>Let&apos;s discuss how we can build the future together.</p>
          </Reveal>
        </div>
      </header>

      <section id="contact-full">
        <div className="container">
          <Reveal>
            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Ready to start your digital transformation journey? Fill out the form below or reach out directly via email or phone.</p>
                
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
          </Reveal>

          <Reveal delay={0.4}>
            <div className="map-placeholder" style={{ height: "450px", overflow: "hidden", padding: 0 }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.349635036577!2d83.1932644!3d17.8222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967d7a7b8e1f5%3A0x6d9f67a7b8e1f5!2sPedhagadi%20VUDA%20Colony%2C%20Pendurthi%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20531173!5e0!3m2!1sen!2sin!4v1714986000000!5m2!1sen!2sin" 
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
