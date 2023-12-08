import { Component, h } from '@stencil/core';

@Component({
  tag: 'features-section',
  styleUrl: 'features-section.css',
  shadow: true,
})
export class FeaturesSection {

  render() {
    return (
      <div>
        <div class="features-container" id="tab">
          <div class="feature-item" data-aos="fade-up" data-aos-duration="5000">
            <div class="feature-icon">&#128218;</div>
            <div class="feature-title">Vast Collection of Books</div>
            <div class="feature-description">Explore our extensive collection of books, ranging from classics to contemporary bestsellers.</div>
          </div>

          <div class="feature-item" data-aos="fade-up" data-aos-duration="5000">
            <div class="feature-icon">&#128214;</div>
            <div class="feature-title">Digital Magazines</div>
            <div class="feature-description">Enjoy popular magazines in digital format, covering various topics and interests.</div>
          </div>
          <div class="feature-item" data-aos="fade-up" data-aos-duration="5000">
            <div class="feature-icon">&#127912;</div>
            <div class="feature-title">Events and Workshops</div>
            <div class="feature-description">Participate in book readings, author signings, and educational workshops held at the library.</div>
          </div>

        </div>
      </div>
    );
  }

}
