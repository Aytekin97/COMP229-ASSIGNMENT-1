/*
 * File Name: Contact.js
 * Student's Name: Aytekin Akbulut
 * Student ID: 301121426
 * Date: October 1, 2024
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    navigate("/")
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p><i><span>Phone: +1 999 999 9999</span> <span>Email: akbuluta6161@gmail.com</span></i></p>
      <form onSubmit={handleSubmit}>
        <div className="entry">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="entry">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />  
        </div>
        <div className="entry">
          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />  
        </div>
        <div className="entry">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />  
        </div>
        <div className="entry">
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />  
        </div>
        <div className="entry">
          <button type="submit">Submit</button>  
        </div>
      </form>
    </div>
  );
}

export default Contact;