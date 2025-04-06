import React, { useState } from "react";
import KakaoMap from "../../../components/KakaoMap";
import { ReactComponent as ArrowRightIcon } from "@assets/img/arrow-right.svg";
import "./about-location.css";

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
      <KakaoMap position={activate} />
      <div className="about__location__links">
        <a
          className="about__location__link"
          href={
            activate === "hwaseong"
              ? "https://kko.kakao.com/UbfFIQQg8W"
              : "https://kko.kakao.com/vLrG-zgISx"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          카카오 맵<span>KAKAO MAP</span>
          <ArrowRightIcon />
        </a>
        <a
          className="about__location__link"
          href={
            activate === "hwaseong"
              ? "https://naver.me/GmbiyQ2y"
              : "https://naver.me/xpr5bxEp"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 맵<span>NAVER MAP</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default Location;
