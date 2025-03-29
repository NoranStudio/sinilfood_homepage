import React, { useState } from "react";

import MainBanner from "./components/MainBanner.js"; // 메인배너
import Slogan from "./components/Slogan.js"; // 슬로건
import CenterContents from "./components/CenterContents.js"; // 전국센터, 파트너
import Partners from "./components/Partners.js";
import Slider from "./components/Slider.js"; // 프렌차이즈
import News from "./components/News.js"; // 새소식
import CS from "./components/CS.js"; // 고객센터

import "./home.css";

function Home() {
  return (
    <div className="home">
      <MainBanner />
      <Slogan />
      <CenterContents />
      <Partners />
      <Slider />
      <News />
      <CS />
    </div>
  );
}

export default Home;
