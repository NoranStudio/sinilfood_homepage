import React from "react";
import cjFreshwayLogo from "@assets/img/cooperate/CJfresh.png";
import cjJeilJedangLogo from "@assets/img/cooperate/CJ.png";
import sajoLogo from "@assets/img/cooperate/sazo.png";
import baeksulLogo from "@assets/img/cooperate/baekseol.png";
import ottogiLogo from "@assets/img/cooperate/oddugi.png";
import daekyungLogo from "@assets/img/cooperate/daekyeong.png";
import daesangLogo from "@assets/img/cooperate/DAESANG.png";
import lotteLogo from "@assets/img/cooperate/LOTTE.png";
import youngmiLogo from "@assets/img/cooperate/yeongmi.png";
import hiveLogo from "@assets/img/cooperate/hive.png";
import bnbKoreaLogo from "@assets/img/cooperate/bnb.png";
import shinliFoodyellowImage from "@assets/img/SHINIL_FOOD.png"; // SHINIL_FOOD.png 이미지
import "./partners.css";

const Partners = () => {
  return (
    <div className="new-partners-header">
      <div className="new-partners-header-content">
        <img
          src={shinliFoodyellowImage}
          alt="SHINIL_FOOD.png"
          className="yellow-logo"
        />
        <h2>
          주식회사 신일푸드는 <br />
          상생경영을 통해 더 큰 가치를 만들어갑니다.
        </h2>
        <h3>협력사 및 제조사</h3>

        <div className="new-partners-grid">
          <div className="partner-item">
            <img src={cjFreshwayLogo} alt="CJ 프레시웨이" />
          </div>
          <div className="partner-item">
            <img src={cjJeilJedangLogo} alt="CJ 제일제당" />
          </div>
          <div className="partner-item">
            <img src={sajoLogo} alt="사조산업" />
          </div>
          <div className="partner-item">
            <img src={baeksulLogo} alt="백설" />
          </div>
          <div className="partner-item">
            <img src={ottogiLogo} alt="오뚜기" />
          </div>
          <div className="partner-item">
            <img src={daekyungLogo} alt="대경O&T" />
          </div>
          <div className="partner-item">
            <img src={daesangLogo} alt="대상" />
          </div>
          <div className="partner-item">
            <img src={lotteLogo} alt="롯데" />
          </div>
          <div className="partner-item">
            <img src={youngmiLogo} alt="영미산업" />
          </div>
          <div className="partner-item">
            <img src={hiveLogo} alt="HIVE" />
          </div>
          <div className="partner-item">
            <img src={bnbKoreaLogo} alt="BNB Korea" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
