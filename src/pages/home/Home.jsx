import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <header>
        <div className="hero">
          <div className="container">
            <div className="hero_info ">
              <h3>Beautiful view</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies sodales neque
                aliquam posuere est congue. Nibh tincidunt rhoncus auctor quis
                urna fusce sed quis.
              </p>
            </div>
            <div className="hero_info ">
              <h3>Luxury apartments</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies sodales neque
                aliquam posuere est congue. Nibh tincidunt rhoncus auctor quis
                urna fusce sed quis.
              </p>
            </div>
            <div className="hero_info ">
              <h3>Fresh air</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies sodales neque
                aliquam posuere est congue. Nibh tincidunt rhoncus auctor quis
                urna fusce sed quis.
              </p>
            </div>
            <div className="hero_info ">
              <h3>Free parking space</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ultricies sodales neque
              </p>
            </div>
          </div>
          <div>
            <h2 className="hero_title">Emerald Castle Residence</h2>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <h1 className="section_title">Our Priorities</h1>
            <div className="priorities">
              <div>
                <img src="/public/imgs/priorities1.png" alt="" />
                <h3>Safety</h3>
              </div>
              <div>
                <img src="/public/imgs/priorities2.png" alt="" />
                <h3>Safety</h3>
              </div>
              <div>
                <img src="/public/imgs/priorities3.png" alt="" />
                <h3>Safety</h3>
              </div>
              <div>
                <img src="/public/imgs/priorities4.png" alt="" />
                <h3>Safety</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="section_title">Our Projects</h1>
            <div className="projects">
              <div className="project">
                <div className="project_info">
                  <h1>Central Park Residence</h1>
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
                    <img src="/public/imgs/eye.svg" alt="" /> 3d View
                  </button>
                </div>
                <div className="project_img">
                  <img src="/public/imgs/project1.png" alt="" />
                </div>
              </div>
              <div className="project">
                <div className="project_info">
                  <h1>Emerald Castle Residence</h1>
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
                    <img src="/public/imgs/eye.svg" alt="" /> 3d View
                  </button>
                </div>
                <div className="project_img">
                  <img src="/public/imgs/project2.png" alt="" />
                </div>
              </div>
              <div className="project">
                <div className="project_info">
                  <h1>Maison Calme</h1>
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
                    <img src="/public/imgs/eye.svg" alt="" /> 3d View
                  </button>
                </div>
                <div className="project_img">
                  <img src="/public/imgs/project3.png" alt="" />
                </div>
              </div>
              <button className="moreBtn">View more</button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="section_title">Our History</h1>
            <div className="history">
              <img src="/public/imgs/history_img.png" alt="" />
              <span className="play">
                <img src="/public/imgs/Play.png" alt="" />
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
