import React, { useState } from "react";

import MainBanner from "./MainBanner.js"; // 메인배너
import Slogan from "./Slogan.js"; // 슬로건
import CenterContents from "./CenterContents"; // 전국센터, 파트너
import Slider from "./Slider.js"; // 프렌차이즈
import News from "./News.js"; // 새소식
import CS from "./CS.js"; // 고객센터

import "../../assets/styles/main_section/home.css";

function App() {
  return (
    <div className="home">
      <MainBanner />
      <Slogan />
      <CenterContents />
      <Slider />
      <News />
      <CS />
    </div>
  );
}

export default App;
