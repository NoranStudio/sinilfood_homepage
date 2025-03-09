import React, { useState } from "react";
import "../../assets/styles/main_section/home.css";

/*
    순서대로 Import정렬 및 각 페이지(섹션)마다 css파일이 연결되어있습니다. 
 */
import Header from "../../components/main_section/Header.js"; // 헤더
import MainBanner from "./MainBanner.js"; // 메인배너
import Slogan from "./Slogan.js"; // 슬로건
import CenterContents from "./CenterContents"; // 전국센터, 파트너
import Slider from "./Slider.js"; // 프렌차이즈
import News from "./News.js"; // 새소식
import CS from "./CS.js"; // 고객센터
import Footer from "../../components/main_section/Footer"; // 푸터


function App() {
  const [isOpenSideMenu, setOpenSideMenu] = useState(false);
  const onClickToggle = () => {
    setOpenSideMenu((prev) => !prev);
  };
  return (
    <div className="home">
      <Header isOpen={onClickToggle} />
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>2</h1>
      <h1>2</h1>
      <h1>2</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>3</h1>
      <h1>3</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>4</h1>
      <h1>4</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>5</h1>
      <h1>5</h1>
      <h1>5</h1>
      <h1>6</h1>
      <h1>6</h1>
      <h1>6</h1>
      <h1>6</h1>
      <h1>7</h1>
      <h1>7</h1>
      <h1>7</h1>
      <h1>7</h1>
      <h1>8</h1>
      <h1>8</h1>
      <h1>8</h1>
      <h1>8</h1>
      {/* <MainBanner />
      <Slogan />
      <CenterContents />
      <Slider />
      <News />
      <CS /> */}
    </div>
  );
}

export default App;
