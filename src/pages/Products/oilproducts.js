import React, { useEffect, useState } from "react";
//import Footer from '../../components/Footer';
// 자사 전용유 / 일반유 섹션 컴포넌트 임포트
import SelfOil from "../../components/oilproduct/selfoil";
import GeneralOil from "../../components/oilproduct/generaloil";
import OilproductNavbar from "../../components/oilproduct/OilproductNavbar";
import OilproductBanner from "../../components/oilproduct/OilproductBanner";
import "./op.css"; // 페이지 전용 스타일
import { useLocation } from "react-router-dom";
function OilProducts() {
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState(state?.subMenu || "");
  useEffect(() => {
    setActiveTab(state?.subMenu || "");
  }, [state?.subMenu]);

  const renderContent = () => {
    switch (activeTab) {
      case "selfoil":
        return <SelfOil />;
      case "franchise":
        return <GeneralOil />;
      default:
        return <SelfOil />;
    }
  };

  return (
    <div className="oilproduct-wrapper">
      <OilproductBanner />
      <OilproductNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {renderContent()}
    </div>
  );
}

export default OilProducts;
