<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
=======
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
  return (
    <footer>
      <div className="container">
        <div className="footer_left">
          <h2>United Dolphins</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="footer_right">
          <ul>
<<<<<<< HEAD
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
=======
            <h3>{t("Explore")}</h3>
            <li>
              <Link>{t("Services")}</Link>
            </li>
            <li>
              <Link>{t("For partners")}</Link>
            </li>
          </ul>
          <ul>
            <h3>{t("Company")}</h3>
            <li>
              <Link>{t("FAQ")}</Link>
            </li>
            <li>
              <Link>{t("Team")}</Link>
            </li>
          </ul>
          <ul>
            <h3>{t("Get in touch")}</h3>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
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

<<<<<<< HEAD
export default Footer
=======
export default Footer;
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
