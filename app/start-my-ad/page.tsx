"use client";

import React, { useState } from "react";
import "./style.scss";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const number = "8192091186";

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Email is invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const whatsappMessage = `Hey! I am ${name} I need a Id with Bonus. \n \n My Email is ${email}`;
    const whatsappURL = `https://wa.me/91${number}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <h2>Let’s Get Started</h2>
      <p className="intro">
        Create your own website, launch powerful ads, and start earning revenue
        today!
      </p>
      <div className="form-box">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <button onClick={handleSubmit}>Send via WhatsApp</button>
      </div>
    </div>
  );
};

export default ContactPage;
