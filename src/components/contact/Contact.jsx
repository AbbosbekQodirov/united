import React from "react";
import "./Contact.css";

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
            <p>U.S.A California</p>
            <p>U.S.A Texas</p>
          </div>
          <div className="contact">
            <span>
              <img src="/public/imgs/call.svg" alt="" />
            </span>
            <h3>Contact</h3>
            <p>+14 (842) 989 2259</p>
            <p>+14 (842) 989 2259</p>
          </div>
          <div className="contact">
            <span>
              <img src="/public/imgs/mail.svg" alt="" />
            </span>
            <h3>Mail</h3>
            <p>uniteddolphins@mail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
