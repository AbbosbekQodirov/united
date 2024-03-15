import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_left">
          <h2>United Dolphins</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="footer_right">
          <ul>
            <h3>Explore</h3>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>For partners</Link>
            </li>
          </ul>
          <ul>
            <h3>Company</h3>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Team</Link>
            </li>
          </ul>
          <ul>
            <h3>Get in touch</h3>
            <li>
              <Link>+14 (842) 989 2259</Link>
            </li>
            <li>
              <Link>uniteddolphins@mail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer