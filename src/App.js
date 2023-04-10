import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";
import "./App.scss";
import Carousel from "./Carousel1";

function App() {
  const handleClick= ()=>{}
  return (
    <div className="App">
      {/* <div>hello</div> */}
      <Parallax
        pages={3}
        style={{ top: "0", left: "0", backgroundColor: "#e7f3ff" }}
        className="animation"
        config={{ pointerEvents: true }}
      >
      {/* first-page-start */}
        <div className="Navbar">
          <ParallaxLayer offset={0} speed={0}>
            <div
              className=""
              style={{ height: "3rem", backgroundColor: "#00000045" }}
            >
              <nav className="navbar navbar-expand-lg navbar-light px-4 py-0">
                <a className="navbar-brand text-light" href="#">
                  Navbar
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <a className="nav-item nav-link active text-light" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link text-light" href="#">
                      Features
                    </a>
                    <a className="nav-item nav-link text-light" href="#">
                      Pricing
                    </a>
                    <a
                      className="nav-item nav-link text-light disabled"
                      href="#"
                    >
                      Disabled
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </ParallaxLayer>
        </div>

        <div className="layer-1">
          <ParallaxLayer offset={0} horizontal speed={3}>
            <div className="animation_layer parallax " id="artbackL"></div>
          </ParallaxLayer>
        </div>
        <div className="layer-2">
          <ParallaxLayer offset={0} horizontal speed={-3}>
            <div className="animation_layer parallax " id="artbackR"></div>
          </ParallaxLayer>
        </div>
        <div className="hero-text-container">
          <ParallaxLayer offset={0} speed={1}>
            <div className="hero-text">hello</div>
          </ParallaxLayer>
        </div>
        <div className="layer-3">
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="animation_layer parallax" id="mountain"></div>
          </ParallaxLayer>
        </div>
        {/* <ParallaxLayer offset={0} speed={-0.5}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer> */}
        <div className="layer-4">
          <ParallaxLayer offset={0} speed={0.9}>
            <div className="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer>
        </div>
        {/* <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer> */}
        <div className="layer-5">
          <ParallaxLayer offset={0} speed={1.1}>
            <div className="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>
        </div>
        <div className="layer-6">
          <ParallaxLayer offset={0} speed={1.1}>
            <div className="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>
        </div>
        <div className="layer-7">
          <ParallaxLayer offset={0} speed={1.1}>
            <div className="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>
        </div>
        {/* <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer> */}
        
        {/* first-page-end */}

        {/* Second Page Starts */}
        <div className="page-2">
          <ParallaxLayer offset={0.999} speed={0.6}>
            <div style={{ backgroundColor: "black", height: "100%" }}></div>
          </ParallaxLayer>
        </div>
        {/* <ParallaxLayer offset={.9999} speed={0.9}>
          <TextBlock />
        </ParallaxLayer> */}
        <div className="page-2-layer-0">
          <ParallaxLayer offset={1} speed={0.9}>
            <div className="">
              <TextBlock />
            </div>
          </ParallaxLayer>
        </div>
        <div className="page-2-layer-1">
          <ParallaxLayer offset={1} speed={0.89}>
            <div className="">
              <Carousel />
            </div>
          </ParallaxLayer>
        </div>

        {/* Second Page Ends */}
      </Parallax>
    </div>
  );
}

export default App;
