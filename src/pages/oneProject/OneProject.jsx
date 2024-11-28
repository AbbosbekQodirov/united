import React, { useEffect } from "react";
import "./OneProjct.css";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import Slider from "../../components/slider/Slider";
<<<<<<< HEAD

function OneProject() {
=======
import { useTranslation } from "react-i18next";

function OneProject() {
  const { t } = useTranslation();
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="one_project">
      <header>
        <div className="hero">
<<<<<<< HEAD
          <h1>Maison Calme</h1>
=======
          <h1>{t("Maison Calme")}</h1>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
          <p>by Unted Dolphins 2024</p>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <table>
              <tbody>
                <tr>
<<<<<<< HEAD
                  <td>Location:</td>
                  <td>Indoor area:</td>
                  <td>Outdoor area:</td>
                  <td>Rooms:</td>
                  <td>WC:</td>
                  <td>Swimming pool:</td>
=======
                  <td>{t("Location")}:</td>
                  <td>{t("Indoor area")}:</td>
                  <td>{t("Outdoor area")}:</td>
                  <td>{t("Rooms")}:</td>
                  <td>{t("WC")}:</td>
                  <td>{t("Swimming pool")}:</td>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
                </tr>
                <tr>
                  <td>
                    <span>U.S California</span>
                  </td>
                  <td>
                    <span>140 </span>sqm
                  </td>
                  <td>
                    <span>200 </span>sqm
                  </td>
                  <td>
                    <span>6</span>
                  </td>
                  <td>
                    <span>3</span>
                  </td>
                  <td>
                    <span>1</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <Slider />
        </section>
        <section>
          <div className="container team_container">
<<<<<<< HEAD
            <h1>Team members</h1>
            <div className="team_members">
              <div className="team_member">
                <img src="/public/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
              </div>
              <div className="team_member">
                <img src="/public/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
              </div>
              <div className="team_member">
                <img src="/public/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
              </div>
              <div className="team_member">
                <img src="/public/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
=======
            <h1>{t("Team members")}</h1>
            <div className="team_members">
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>{t("The Architect")}</p>
              </div>
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>{t("The Architect")}</p>
              </div>
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>{t("The Architect")}</p>
              </div>
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>{t("The Architect")}</p>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default OneProject;
