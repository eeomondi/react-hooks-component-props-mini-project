// src/components/About.js
import React from 'react';

function About({ logo, about }) {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={logo || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;

