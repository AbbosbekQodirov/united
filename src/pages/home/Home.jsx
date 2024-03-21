import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import Homeslider from "../../components/homeSlider/Homeslider";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <header>
        <Homeslider />
      </header>
      <main>
        <section>
          <div className="container">
            <h1 className="section_title">{t("Our Priorities")}</h1>
            <div className="priorities">
              <div>
                <img src="/imgs/priorities1.png" alt="" />
                <h3>{t("Safety")}</h3>
              </div>
              <div>
                <img src="/imgs/priorities2.png" alt="" />
                <h3>{t("Quality")}</h3>
              </div>
              <div>
                <img src="/imgs/priorities3.png" alt="" />
                <h3>{t("Affordable")}</h3>
              </div>
              <div>
                <img src="/imgs/priorities4.png" alt="" />
                <h3>{t("Eco-friendly")}</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="section_title">{t("Our projects")}</h1>
            <div className="projects">
              <div className="project">
                <div className="project_info">
                  <h1>{t("Central Park Residence")}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Metus metus nunc
                    odio id. Duis sed nisl nec dolor purus velit. Tellus vivamus
                    blandit at varius sit pretium in in id. Diam nullam sit
                    consectetur mauris ultrices.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Metus metus nunc
                    odio id. Duis sed nisl nec dolor purus velit.
                  </p>
                  <button>
                    <img src="/imgs/eye.svg" alt="" /> {t("3d View")}
                  </button>
                </div>
                <div className="project_img">
                  <img src="/imgs/project1.png" alt="" />
                </div>
              </div>
              <div className="project">
                <div className="project_info">
                  <h1>{t("Emerald Castle Residence")}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Metus metus nunc
                    odio id. Duis sed nisl nec dolor purus velit. Tellus vivamus
                    blandit at varius sit pretium in in id. Diam nullam sit
                    consectetur mauris ultrices.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Metus metus nunc
                    odio id. Duis sed nisl nec dolor purus velit.
                  </p>
                  <button>
                    <img src="/imgs/eye.svg" alt="" /> {t("3d View")}
                  </button>
                </div>
                <div className="project_img">
                  <img src="/imgs/project2.png" alt="" />
                </div>
              </div>
              <div className="project">
                <div className="project_info">
                  <h1>{t("Maison Calme")}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Metus metus nunc
                    odio id. Duis sed nisl nec dolor purus velit. Tellus vivamus
                    blandit at varius sit pretium in in id. Diam nullam sit
                    consectetur mauris ultrices.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Metus metus nunc
                    odio id. Duis sed nisl nec dolor purus velit.
                  </p>
                  <button>
                    <img src="/imgs/eye.svg" alt="" /> {t("3d View")}
                  </button>
                </div>
                <div className="project_img">
                  <img src="/imgs/project3.png" alt="" />
                </div>
              </div>
              <button className="moreBtn">{t("View more")}</button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="section_title">{t("Our History")}</h1>
            <div className="history">
              <img src="/imgs/history_img.png" alt="" />
              <span className="play">
                <img src="/imgs/Play.png" alt="" />
              </span>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
