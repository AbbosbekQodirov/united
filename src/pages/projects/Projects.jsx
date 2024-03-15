import React, { useEffect } from "react";
import "./Projects.css";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import "./Projects.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <header>
        <div className="hero project_page">
          <div className="container">
            <div>
              <h1>Our projects</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus nibh lorem et
                orci scelerisque praesent risus scelerisque orci.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className=" container our_projects">
          <div className=" our_project">
            <div className="project_info">
              <h2>Maison Calme</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Location:</td>
                    <td>
                      <span>U.S California</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Indoor area:</td>
                    <td>
                      <span>140</span>sqm
                    </td>
                  </tr>
                  <tr>
                    <td>Outdoor area:</td>
                    <td>
                      <span>200</span>sqm
                    </td>
                  </tr>
                  <tr>
                    <td>Rooms:</td>
                    <td>
                      <span>6</span>
                    </td>
                  </tr>
                  <tr>
                    <td>WC:</td>
                    <td>
                      <span>3</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Swimming pool:</td>
                    <td>
                      <span>1</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button>
                {" "}
                <span>
                  <BiSolidPhoneCall />
                </span>{" "}
                Contact us
              </button>
            </div>
            <div className="project_imgs">
              <img src="/imgs/home1.png" alt="" />
              <Link to={"/project/1"}>
                <span>
                  <FaEye /> View{" "}
                </span>
              </Link>
            </div>
          </div>
          <div className=" our_project">
            <div className="project_info">
              <h2>Maison Calme</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Location:</td>
                    <td>
                      <span>U.S California</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Indoor area:</td>
                    <td>
                      <span>140</span>sqm
                    </td>
                  </tr>
                  <tr>
                    <td>Outdoor area:</td>
                    <td>
                      <span>200</span>sqm
                    </td>
                  </tr>
                  <tr>
                    <td>Rooms:</td>
                    <td>
                      <span>6</span>
                    </td>
                  </tr>
                  <tr>
                    <td>WC:</td>
                    <td>
                      <span>3</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Swimming pool:</td>
                    <td>
                      <span>1</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button>
                {" "}
                <span>
                  <BiSolidPhoneCall />
                </span>{" "}
                Contact us
              </button>
            </div>
            <div className="project_imgs">
              <img src="/imgs/home1.png" alt="" />
              <Link to={"/project/1"}>
                <span>
                  <FaEye /> View{" "}
                </span>
              </Link>
            </div>
          </div>
          <div className=" our_project">
            <div className="project_info">
              <h2>Maison Calme</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Location:</td>
                    <td>
                      <span>U.S California</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Indoor area:</td>
                    <td>
                      <span>140</span>sqm
                    </td>
                  </tr>
                  <tr>
                    <td>Outdoor area:</td>
                    <td>
                      <span>200</span>sqm
                    </td>
                  </tr>
                  <tr>
                    <td>Rooms:</td>
                    <td>
                      <span>6</span>
                    </td>
                  </tr>
                  <tr>
                    <td>WC:</td>
                    <td>
                      <span>3</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Swimming pool:</td>
                    <td>
                      <span>1</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button>
                {" "}
                <span>
                  <BiSolidPhoneCall />
                </span>{" "}
                Contact us
              </button>
            </div>
            <div className="project_imgs">
              <img src="/imgs/home1.png" alt="" />
              <Link to={"/project/1"}>
                <span>
                  <FaEye /> View{" "}
                </span>
              </Link>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
