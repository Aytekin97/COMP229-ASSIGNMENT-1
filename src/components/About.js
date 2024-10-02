/*
 * File Name: About.js
 * Student's Name: Aytekin Akbulut
 * Student ID: 301121426
 * Date: October 1, 2024
 */

import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img class="mug_shot" src="/images/mug_shot.jpg" alt="Logo" />
      <p style={{ fontSize: "2rem" }}>
        I'm Aytekin Akbulut, a passionate software developer specializing in web development and software engineering.
      </p>
      <a style={{ fontSize: "2rem" }} href="/Aytekin Akbulut - Resume.pdf" download>Download My Resume</a>
    </div>
  );
}

export default About;