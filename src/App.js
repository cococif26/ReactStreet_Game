import React from "react";
import "./App.css";
import Intro from "./component/intro";
import "./style/landingPage.css";
import NavigationBar from "./component/navigationbar";
import TrandingGame from "./component/trendinggame";
import BestGame from "./component/bestgame";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginTop: "20px" }}>
          <path
            fill="#d63384"
            fill-opacity="1"
            d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,149.3C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="trending">
        <TrandingGame />
      </div>

      <div className="best">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d63384"
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,170.7C672,203,768,213,864,218.7C960,224,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <BestGame />
      </div>
    </div>
  );
}

export default App;
