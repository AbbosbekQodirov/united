import React from "react";
import "./Contact.css";
<<<<<<< HEAD

function Contact() {
  return (
    <section className="contact_section">
      <div className="container">
        <h1 className="section_title">Contact us</h1>
        <p>Email, call or complete the form to get in touch with us!</p>
        <div className="contacts">
          <div className="contact">
            <span>
              <img src="/public/imgs/addres.svg" alt="" />
            </span>
            <h3>Adress</h3>
=======
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="contact_section">
      <div className="container">
        <h1 className="section_title">{t("Contact us")}</h1>
        <p>{t("Email, call or complete the form to get in touch with us!")}</p>
        <div className="contacts">
          <div className="contact">
            <span>
              <img src="/imgs/addres.svg" alt="" />
            </span>
            <h3>{t("Adress")}</h3>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
            <p>U.S.A California</p>
            <p>U.S.A Texas</p>
          </div>
          <div className="contact">
            <span>
<<<<<<< HEAD
              <img src="/public/imgs/call.svg" alt="" />
            </span>
            <h3>Contact</h3>
=======
              <img src="/imgs/call.svg" alt="" />
            </span>
            <h3>{t("Contact")}</h3>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
            <p>+14 (842) 989 2259</p>
            <p>+14 (842) 989 2259</p>
          </div>
          <div className="contact">
            <span>
<<<<<<< HEAD
              <img src="/public/imgs/mail.svg" alt="" />
            </span>
            <h3>Mail</h3>
=======
              <img src="/imgs/mail.svg" alt="" />
            </span>
            <h3>{t("Mail")}</h3>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
            <p>uniteddolphins@mail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
