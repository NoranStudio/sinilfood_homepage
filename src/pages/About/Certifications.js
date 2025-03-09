import React from "react";
import { useMediaQuery } from "react-responsive";

import CertificationsMobile from "./CertificationsMobile";
import { ReactComponent as HACCPIcon } from "../../assets/img/about/cert/haccp.svg";
import haccpDocImg from "../../assets/img/about/cert/haccp-doc.png";
import facilityImg1 from "../../assets/img/about/cert/facility1.png";
import facilityImg2 from "../../assets/img/about/cert/facility2.png";
import certImg1 from "../../assets/img/about/cert/cert1.png";
import certImg2 from "../../assets/img/about/cert/cert2.png";
import certImg3 from "../../assets/img/about/cert/cert3.png";
import "../../assets/styles/about/about-cert.css";

const Certifications = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobile) {
    return <CertificationsMobile />;
  } else {
    return (
      <div class="about__cert">
        <div class="about__cert__detail">
          <div>
            <h1>식품안전관리인증 HACCP</h1>
            <p>
              HACCP 인증 [식품안전관리인증기준] 받은 사업장 안에서 모든 제품이
              위생적으로 생산되고 있으며, 식품을 만드는 과정에서 생물학적,
              화학적, 물리적 위해요인들이 발생할 수 있는 상황을 차단하여
              소비자에게 안전하고 깨끗한 제품을 공급하고 있습니다.
            </p>
          </div>
          <div>
            <HACCPIcon />
            <img src={haccpDocImg} alt="haccp-doc" />
          </div>
        </div>
        <div class="about__cert__contents">
          <h1>정직하고 위생적인 제조시설</h1>
        </div>
        <img src={facilityImg1} class="about__cert__banner" alt="facility" />
        <img src={facilityImg2} class="about__cert__banner" alt="facility" />
        <div class="about__cert__docs">
          <div class="about__cert__doc">
            <img src={certImg1} alt="cert" />
            <p>폐기물처리 신고증명서</p>
          </div>
          <div class="about__cert__doc">
            <img src={certImg2} alt="cert" />
            <p>폐기물 수집 운반업 허가증</p>
          </div>
          <div class="about__cert__doc">
            <img src={certImg3} alt="cert" />
            <p>
              폐기물 수집 운반업자 등의
              <br /> 임시보관장소 설치승인서
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Certifications;
