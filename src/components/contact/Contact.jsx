import React from "react";
import "./Contact.css";
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
            <p>U.S.A California</p>
            <p>U.S.A Texas</p>
          </div>
          <div className="contact">
            <span>
              <img src="/imgs/call.svg" alt="" />
            </span>
            <h3>{t("Contact")}</h3>
            <p>+14 (842) 989 2259</p>
            <p>+14 (842) 989 2259</p>
          </div>
          <div className="contact">
            <span>
              <img src="/imgs/mail.svg" alt="" />
            </span>
            <h3>{t("Mail")}</h3>
            <p>uniteddolphins@mail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
