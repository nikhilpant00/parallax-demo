import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Parallax
        pages={2}
        style={{ top: "0", left: "0", backgroundColor: "#e7f3ff" }}
        class="animation"
      >
        <div className="test">
          <ParallaxLayer offset={0} horizontal speed={3}>
            <div class="animation_layer parallax " id="artbackL"></div>
          </ParallaxLayer>
        </div>
        <div className="test2">
          <ParallaxLayer offset={0} horizontal speed={-3}>
            <div class="animation_layer parallax " id="artbackR"></div>
          </ParallaxLayer>
        </div>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={-0.5}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={0.8}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={1}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={.9} factor={.9} speed={1}>
          <TextBlock />
        </ParallaxLayer> */}
      </Parallax>
      {/* <div style={{height:'10rem' ,background:'red', textAlign:'center'}}>hello world</div> */}
    </div>
  );
}

export default App;
