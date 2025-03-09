import React, { useState } from "react";
import KakaoMap from "../../components/KakaoMap";
import { ReactComponent as ArrowRightIcon } from "../../assets/img/arrow-right.svg";
import "../../assets/styles/about/about-location.css";

const Location = () => {
  const [activate, setActivate] = useState("hwaseong");

  return (
    <div className="about__location">
      <div className="about__location__title">
        <h1>(주)신일푸드 오시는 길</h1>
        <div className="about__location__tab">
          <div
            className={activate === "hwaseong" ? "active" : ""}
            onClick={() => setActivate("hwaseong")}
          >
            (주)신일푸드 <span>화성지점</span>
          </div>
          <div
            className={activate === "gimhea" ? "active" : ""}
            onClick={() => setActivate("gimhea")}
          >
            (주)신일푸드 <span>본점</span>
          </div>
        </div>
      </div>
      <KakaoMap position={activate} className="about__location__map" />
      <div className="about__location__links">
        <a className="about__location__link" href="https://map.kakao.com/">
          카카오 맵<span>KAKAO MAP</span>
          <ArrowRightIcon />
        </a>
        <a className="about__location__link" href="https://map.naver.com/">
          네이버 맵<span>NAVER MAP</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default Location;
