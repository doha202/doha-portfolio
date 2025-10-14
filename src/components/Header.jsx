import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Doha El Haiba</div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
