import { NavLink } from "react-router-dom";
// import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why Choose Us?</h1>
              <p>
                Passion for Sports: Our team consists of enthusiastic sports professionals who
                are dedicated to staying informed about the latest trends and developments in the sports world.
              </p>
              <p>
                Tailored Solutions: We understand that every athlete and sports enthusiast is unique.
                That's why we develop customized solutions that align with your specific interests and goals.
              </p>
              <p>
                Customer-Centric Approach: Your satisfaction is our priority. We provide exceptional support to address your sports-related concerns and needs.
              </p>
              <p>
                Affordable Options: We offer competitive pricing while ensuring the quality and effectiveness of our sports services.
              </p>
              <p>
                Reliability: You can rely on us to support you whenever you need assistance. We're committed to ensuring your sports journey is smooth and reliable, available round the clock.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* <Analytics /> */}
    </>
  );
};


// export const About = () => {
//     return <h1>About Page</h1>;
//   };