import React, { useEffect } from "react";
import "./OneProjct.css";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import Slider from "../../components/slider/Slider";

function OneProject() {
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
          <h1>Maison Calme</h1>
          <p>by Unted Dolphins 2024</p>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <table>
              <tbody>
                <tr>
                  <td>Location:</td>
                  <td>Indoor area:</td>
                  <td>Outdoor area:</td>
                  <td>Rooms:</td>
                  <td>WC:</td>
                  <td>Swimming pool:</td>
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
            <h1>Team members</h1>
            <div className="team_members">
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
              </div>
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
              </div>
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
              </div>
              <div className="team_member">
                <img src="/imgs/member1.png" alt="" />
                <h4>John Thompson</h4>
                <p>The Architect</p>
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
