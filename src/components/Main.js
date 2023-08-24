import computer from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import controller from "../assets/images/image-gaming-growth.jpg";

const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <section className="hero-container">
          <div className="hero"></div>
          <div className="hero-content">
            <h1 className="hero-title">The Bright Future of Web 3.0?</h1>
            <div className="desc">
              <p className="hero-desc">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="hero-read-more-btn">Read more</button>
            </div>
          </div>
        </section>

        <section className="highlights-container">
          <h2 className="highlights-container-title">New</h2>
          <div className="single-highlight">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="single-highlight">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="single-highlight">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </section>

        <section className="top-posts">
          <div className="single-post">
            <img src={computer} alt="" className="post-img" />
            <div className="post-info">
              <h1>01</h1>
              <h3>Reviving Retro PCs</h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="single-post">
            <img src={laptop} alt="" className="post-img" />
            <div className="post-info">
              <h1>02</h1>
              <h3>Top 10 Laptops of 2022</h3>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="single-post">
            <img src={controller} alt="" className="post-img" />
            <div className="post-info">
              <h1>03</h1>
              <h3>The Growth of Gaming</h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
