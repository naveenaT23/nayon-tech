"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "" // Honeypot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.botField) {
      console.warn("Bot detected.");
      return;
    }
    
    const phoneNumber = "917569562240";
    const text = `*New Inquiry from Nayon Tech Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject || "N/A"}%0A*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Honeypot field - hidden from users */}
      <div style={{ display: "none" }}>
        <input 
          type="text" 
          name="botField" 
          value={formData.botField} 
          onChange={handleChange} 
          tabIndex={-1} 
          autoComplete="off" 
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          name="name"
          placeholder="Full Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          name="subject"
          placeholder="Subject" 
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea 
          name="message"
          rows={5} 
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
};

export default ContactForm;
