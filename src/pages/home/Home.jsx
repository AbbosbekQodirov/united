import React from "react";
import "./Home.css";

function Home() {
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
                <img src="../../../public/imgs/priorities1.png" alt="" />
                <h3>Safety</h3>
              </div>
              <div>
                <img src="../../../public/imgs/priorities2.png" alt="" />
                <h3>Safety</h3>
              </div>
              <div>
                <img src="../../../public/imgs/priorities3.png" alt="" />
                <h3>Safety</h3>
              </div>
              <div>
                <img src="../../../public/imgs/priorities4.png" alt="" />
                <h3>Safety</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className="section_title">Our Projects</h1>
          </div>
        </section>
        <section>
          <div className="container"></div>
        </section>
        <section>
          <div className="container"></div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
