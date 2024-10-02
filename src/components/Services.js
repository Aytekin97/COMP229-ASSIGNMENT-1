/*
 * File Name: Services.js
 * Student's Name: Aytekin Akbulut
 * Student ID: 301121426
 * Date: October 1, 2024
 */

import React from 'react';

function Services() {
  return (
    <div className="services">
      <h1>Services I Offer</h1>
      <div className="service_row">
        <div className="service">
          <h2>Web Development</h2>
          <img src="/images/web_development_generated_by_chatgpt.webp" alt="Logo" />
        </div>
        <div className="service">
          <h2>API Development and Integration</h2>
          <img src="/images/api_development_generated_by_chatgpt.webp" alt="Logo" />
        </div>
        <div className="service">
          <h2>AI Development and Integration</h2>
          <img src="/images/ai_development_generated_by_chatgpt.webp" alt="Logo" />
        </div>
      </div>
      <div className="service_row">
        <div className="service">
          <h2>Frontend Development</h2>
          <img src="/images/frontend_development_generated_by_chatgpt.webp" alt="Logo" />
        </div>
        <div className="service">
          <h2>Backend Development</h2>
          <img src="/images/backend_development_generated_by_chatgpt.webp" alt="Logo" />
        </div>
        <div className="service">
          <h2>Software Maintenance and Support</h2>
          <img src="/images/maintanance_support_generated_by_chatgpt.webp" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Services;