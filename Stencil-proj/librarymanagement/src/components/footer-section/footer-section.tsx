import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';
@Component({
  tag: 'footer-section',
  styleUrl: 'footer-section.css',
  shadow: true,
})
export class FooterSection {

  render() {
    let x = (
      <div>
        <p id='copy-rights'>&copy; 2023 Library. All rights reserved.</p>
        <p id='sub-para'>are you the admin? <a {...href("/admin-login")}>Login here</a></p>
      </div>
    )
    return x;
  }

}
