import React, { useEffect } from "react";
import "./OneProjct.css";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import Slider from "../../components/slider/Slider";
import { useTranslation } from "react-i18next";

function OneProject() {
  const { t } = useTranslation();
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
          <h1>{t("Maison Calme")}</h1>
          <p>by Unted Dolphins 2024</p>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <table>
              <tbody>
                <tr>
                  <td>{t("Location")}:</td>
                  <td>{t("Indoor area")}:</td>
                  <td>{t("Outdoor area")}:</td>
                  <td>{t("Rooms")}:</td>
                  <td>{t("WC")}:</td>
                  <td>{t("Swimming pool")}:</td>
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
