// import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Join the Game with your Team </p>
              <h1>Welcome to Sport Community</h1>
              <p>
              Most people give up just when they’re about to achieve success. They quit on the one yard line. They give up at the last minute of the game one foot from a winning touchdown.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn"> Join now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Make Team</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to assist you</p>
            <h1>Get Active Today</h1>
            <p>
            Ready to take the first step towards a more active and vibrant lifestyle? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help you thrive in the world of sports and fitness.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn"> Fight now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Come Back</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};




// export const Home = () => {
//     return <h1>Hello Home Page</h1>;
//   };