import React, { useEffect } from "react";
import "./Team.css";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

function Team() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <header>
        <div className="hero team_page">
          <div className="container">
            <div>
              <h1>Our team</h1>
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
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="section_title">Team members</h1>
            <div className="memories">
              <img src="/public/imgs/team1.png" alt="" />
              <div className="imgs">
                <img src="/public/imgs/team2.png" alt="" />
                <img src="/public/imgs/team3.png" alt="" />
                <img src="/public/imgs/team4.png" alt="" />
                <img src="/public/imgs/team5.png" alt="" />
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
