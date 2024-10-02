/*
 * File Name: Home.js
 * Student's Name: Aytekin Akbulut
 * Student ID: 301121426
 * Date: October 1, 2024
 */

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Aytek! I work as a software developer at PowerDev. I am responsible for both frontend and backend development</p>
      <p>Mission Statement: To create impactful digital solutions that enhance user experience and drive innovation.</p>
      <Link to="/about" className="button">Learn More About Me</Link>
    </div>
  );
}

export default Home;