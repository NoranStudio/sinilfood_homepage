import React, { useMemo, useState } from "react";
import "./FCProducts.css";

// 데스크톱 버전 컴포넌트
import Manufacturing from "../../components/business/Manufacturing";
import OilTypes from "../../components/business/OilTypes";
import RenewableEnergy from "../../components/business/RenewableEnergy";
import Manufacturers from "../../components/business/Manufacturers";
import Logistics from "../../components/business/Logistics";
import BusinessBanner from "./BusinessBanner";
import BusinessNavbar from "./BusinessNavbar";

function FCProductsDesktop() {
  const [activeTab, setActiveTab] = useState("manufacturing");


  const renderContent = useMemo(() => {
    switch (activeTab) {
      case "manufacturing":
        return <Manufacturing />;
      case "types":
        return <OilTypes />;
      case "renewable":
        return <RenewableEnergy />;
      case "manufacturers":
        return <Manufacturers />;
      case "logistics":
        return <Logistics />;
      default:
        return <Manufacturing />;
    }
  }, [activeTab]);

  return (
    <div className="business-wrapper">
      <BusinessBanner />
      <BusinessNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent}
    </div>
  );
}

export default FCProductsDesktop;
