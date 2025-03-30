import React, { useEffect, useState } from "react";
import "./FCProductsMobile.css";
import ManufacturingMobile from "../../../components/business/mobile/ManufacturingMobile";
import OilTypesMobile from "../../../components/business/mobile/OilTypesMobile";
import RenewableEnergyMobile from "../../../components/business/mobile/RenewableEnergyMobile";
import ManufacturersMobile from "../../../components/business/mobile/ManufacturersMobile";
import LogisticsMobile from "../../../components/business/mobile/LogisticsMobile";
import businessBannerMobile from "../../../assets/img/business/mobile/business_banner_mobile.png";
import businessBannerLogisticsMobile from "../../../assets/img/business/mobile/business_banner_logistics_mobile.png";
import { useLocation } from "react-router-dom";
import BusinessNavbar from "../../../components/business/BusinessNavbar";

function FCProductsMobile() {
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState(state?.subMenu || "");
  useEffect(() => {
    setActiveTab(state?.subMenu || "");
  }, [state?.subMenu]);

  // 배너 이미지 선택 로직
  const bannerImage =
    activeTab === "logistics"
      ? businessBannerLogisticsMobile
      : businessBannerMobile;

  const renderContent = () => {
    switch (activeTab) {
      case"":
        return <ManufacturingMobile />;
      case "types":
        return <OilTypesMobile />;
      case "renewable":
        return <RenewableEnergyMobile />;
      case "manufacturers":
        return <ManufacturersMobile />;
      case "logistics":
        return <LogisticsMobile />;
      default:
        return <ManufacturingMobile />;
    }
  };

  return (
    <div className="business-wrapper-mobile">
      <div
        className="business-banner-mobile"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="business-content-mobile">
          <p className="light-text">프랜차이즈를 위한</p>
          <p className="bold-text">맞춤형 전용유 제조 및 배송</p>
        </div>
      </div>
      <BusinessNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default FCProductsMobile;
