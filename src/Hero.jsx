import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Occupy bushwick chicharrones cupping next level sriracha pinterest
            shabby chic mlkshk trust fund woke roof party. Prism blue bottle
            kombucha flannel pour-over semiotics bruh viral deep v dreamcatcher
            readymade meh everyday carry marfa slow-carb. Kogi humblebrag
            chicharrones yes plz air plant.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
