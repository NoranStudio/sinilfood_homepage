import React from "react";
import aboutCiDownloadImg from "@assets/img/shinil_logo.png";
import aboutCiImg from "@assets/img/about/about-ci.png";
import aboutCiMobileImg1 from "@assets/img/about/about-ci-mobile1.png";
import aboutCiMobileImg2 from "@assets/img/about/about-ci-mobile2.png";
import { ReactComponent as DownloadIcon } from "@assets/img/download-icon.svg";
import "./about-ci.css";
import { useMediaQuery } from "react-responsive";

const CI = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  return (
    <div className="about__ci">
      <h1>CI</h1>
      {isMobile ? (
        [
          <img className="about__ci__img" alt="about_ci_img" src={aboutCiMobileImg1} />,
          <img className="about__ci__img" alt="about_ci_img" src={aboutCiMobileImg2} />,
        ]
      ) : (
        <img className="about__ci__img" alt="about_ci_img" src={aboutCiImg} />
      )}
      <p className="about__ci__desc">
        <span>깨끗한 기름을 형상화하여 폐식용유의 순환과 재활용 과정을 상징적으로 표현하였습니다.</span>
        <span>
          그린과 옐로우 톤을 사용하여 친환경적 이미지를 강조하고, 깨끗한 기름의 순환이 지속 가능한 미래를 만들어간다는 기업의
          비전을 담았습니다.
        </span>
        <span>
          또한, 부드럽게 이어지는 곡선은 자연스럽고 연속적인 순환을 나타내어 친환경과 책임 있는 기름 관리의 가치를 전달합니다.
        </span>
      </p>
      <a role="button" className="about__ci__download" download href={aboutCiDownloadImg}>
        <span>신일푸드 로고 CI 다운로드</span>
        <DownloadIcon />
      </a>
    </div>
  );
};

export default CI;
