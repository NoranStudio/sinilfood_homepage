import React, { useMemo, useState } from "react";

import "./about-company.css";
import AboutBanner from "./AboutBanner";
import AboutNavbar from "./AboutNavbar";
import Introduction from "./components/Introduction";
import CI from "./components/CI";
import Certifications from "./components/Certifications";
import Location from "./components/Location";
import History from "./components/History";
import Organization from "./components/Organization";

/**
 * 
 * introduction
 * ci
 * approvals
 * path
 * history
 * organization
 */
const AboutCompany = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case "introduction":
        return <Introduction />;
      case "ci":
        return <CI />;
      case "certifications":
        return <Certifications />;
      case "location":
        return <Location />;
      case "history":
        return <History />;
      case "organization":
        return <Organization />;
      default:
        return null;
    }
  }, [activeTab]);
  
  return (
    <div className="about-company">
      <AboutBanner />
      <AboutNavbar setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* {renderContent} */}
    </div>
  );
};

export default AboutCompany;
