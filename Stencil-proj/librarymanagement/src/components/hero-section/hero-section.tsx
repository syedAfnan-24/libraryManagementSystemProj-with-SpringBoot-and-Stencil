import { Component, h } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'hero-section.css',
  shadow: true,
})
export class HeroSection {

  render() {
    return (
      <header class="hero">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="5000">
          <h1>Library Management System</h1>
          <p>Find the books you need</p>
        </div>
      </header>
    );
  }

}
