<<<<<<< HEAD
import React, { useEffect } from "react";
import "./Team.css";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

function Team() {
=======
import React, { useEffect, useState } from "react";
import "./Team.css";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation();
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
<<<<<<< HEAD
=======

  const [members, setMembers]=useState([{},{},{},{},{},{}])

>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
  return (
    <div>
      <header>
        <div className="hero team_page">
          <div className="container">
            <div>
<<<<<<< HEAD
              <h1>Our team</h1>
=======
              <h1>{t("Our team")}</h1>
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus nibh lorem et
                orci scelerisque.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
<<<<<<< HEAD
            <h1 className="section_title">Team members</h1>
            <div className="members">
              <div className="member">
                <div>
                  <img src="/public/imgs/user1.png" alt="" />
                  <div className="member_info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Euismod lectus
                      amet adipiscing nibh. Facilisi risus neque nibh
                      ullamcorper nunc. Dolor cras in euismod sem. Porttitor id
                      vitae ut neque elit. At vitae dui ullamcorper consequat id
                      amet tellus orci volutpat. Egestas netus orci congue sit
                      ullamcorper eu natoque praesent. Blandit id tellus egestas
                      ligula. Cras congue parturient tortor pretium. Eu bibendum
                      volutpat sed porta eu id eget pulvinar vulputate.
                    </p>
                  </div>
                </div>
                <div className="member_title">
                  <h3>Jason Charlez</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="member">
                <div>
                  <img src="/public/imgs/user1.png" alt="" />
                  <div className="member_info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Euismod lectus
                      amet adipiscing nibh. Facilisi risus neque nibh
                      ullamcorper nunc. Dolor cras in euismod sem. Porttitor id
                      vitae ut neque elit. At vitae dui ullamcorper consequat id
                      amet tellus orci volutpat. Egestas netus orci congue sit
                      ullamcorper eu natoque praesent. Blandit id tellus egestas
                      ligula. Cras congue parturient tortor pretium. Eu bibendum
                      volutpat sed porta eu id eget pulvinar vulputate.
                    </p>
                  </div>
                </div>
                <div className="member_title">
                  <h3>Jason Charlez</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="member">
                <div>
                  <img src="/public/imgs/user1.png" alt="" />
                  <div className="member_info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Euismod lectus
                      amet adipiscing nibh. Facilisi risus neque nibh
                      ullamcorper nunc. Dolor cras in euismod sem. Porttitor id
                      vitae ut neque elit. At vitae dui ullamcorper consequat id
                      amet tellus orci volutpat. Egestas netus orci congue sit
                      ullamcorper eu natoque praesent. Blandit id tellus egestas
                      ligula. Cras congue parturient tortor pretium. Eu bibendum
                      volutpat sed porta eu id eget pulvinar vulputate.
                    </p>
                  </div>
                </div>
                <div className="member_title">
                  <h3>Jason Charlez</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="member">
                <div>
                  <img src="/public/imgs/user1.png" alt="" />
                  <div className="member_info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Euismod lectus
                      amet adipiscing nibh. Facilisi risus neque nibh
                      ullamcorper nunc. Dolor cras in euismod sem. Porttitor id
                      vitae ut neque elit. At vitae dui ullamcorper consequat id
                      amet tellus orci volutpat. Egestas netus orci congue sit
                      ullamcorper eu natoque praesent. Blandit id tellus egestas
                      ligula. Cras congue parturient tortor pretium. Eu bibendum
                      volutpat sed porta eu id eget pulvinar vulputate.
                    </p>
                  </div>
                </div>
                <div className="member_title">
                  <h3>Jason Charlez</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="member">
                <div>
                  <img src="/public/imgs/user1.png" alt="" />
                  <div className="member_info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Euismod lectus
                      amet adipiscing nibh. Facilisi risus neque nibh
                      ullamcorper nunc. Dolor cras in euismod sem. Porttitor id
                      vitae ut neque elit. At vitae dui ullamcorper consequat id
                      amet tellus orci volutpat. Egestas netus orci congue sit
                      ullamcorper eu natoque praesent. Blandit id tellus egestas
                      ligula. Cras congue parturient tortor pretium. Eu bibendum
                      volutpat sed porta eu id eget pulvinar vulputate.
                    </p>
                  </div>
                </div>
                <div className="member_title">
                  <h3>Jason Charlez</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="member">
                <div>
                  <img src="/public/imgs/user1.png" alt="" />
                  <div className="member_info">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Euismod lectus
                      amet adipiscing nibh. Facilisi risus neque nibh
                      ullamcorper nunc. Dolor cras in euismod sem. Porttitor id
                      vitae ut neque elit. At vitae dui ullamcorper consequat id
                      amet tellus orci volutpat. Egestas netus orci congue sit
                      ullamcorper eu natoque praesent. Blandit id tellus egestas
                      ligula. Cras congue parturient tortor pretium. Eu bibendum
                      volutpat sed porta eu id eget pulvinar vulputate.
                    </p>
                  </div>
                </div>
                <div className="member_title">
                  <h3>Jason Charlez</h3>
                  <p>CEO</p>
                </div>
              </div>
=======
            <h1 className="section_title">{t("Team members")}</h1>
            <div className="members">
              {members?.map(()=>{
                return (
                  <div className="member">
                    <div>
                      <img src="/imgs/user1.png" alt="" />
                      <div className="member_info">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Euismod lectus
                          amet adipiscing nibh. Facilisi risus neque nibh
                          ullamcorper nunc. Dolor cras in euismod sem. Porttitor
                          id vitae ut neque elit. At vitae dui ullamcorper
                          consequat id amet tellus orci volutpat. Egestas netus
                          orci congue sit ullamcorper eu natoque praesent.
                          Blandit id tellus egestas ligula. Cras congue
                          parturient tortor pretium. Eu bibendum volutpat sed
                          porta eu id eget pulvinar vulputate.
                        </p>
                      </div>
                    </div>
                    <div className="member_title">
                      <h3>Jason Charlez</h3>
                      <p>CEO</p>
                    </div>
                  </div>
                );
              })}
              
>>>>>>> 7dbc3e4937d09a9950fd5eaf292be1f4a4bc0a1d
            </div>
          </div>
        </section>
        <section>
          <div className="container">
<<<<<<< HEAD
            <h1 className="section_title">Team members</h1>
            <div className="memories">
              <img src="/public/imgs/team1.png" alt="" />
              <div className="imgs">
                <img src="/public/imgs/team2.png" alt="" />
                <img src="/public/imgs/team3.png" alt="" />
                <img src="/public/imgs/team4.png" alt="" />
                <img src="/public/imgs/team5.png" alt="" />
=======
            <h1 className="section_title">{t("Team memories")}</h1>
            <div className="memories">
              <img src="/imgs/team1.png" alt="" />
              <div className="imgs">
                <img src="/imgs/team2.png" alt="" />
                <img src="/imgs/team3.png" alt="" />
                <img src="/imgs/team4.png" alt="" />
                <img src="/imgs/team5.png" alt="" />
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

export default Team;
