import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";



import "@assets/styles/about/about-company.css";
import AboutBanner from "../../components/about/AboutBanner";
import AboutNavbar from "../../components/about/AboutNavbar";

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

  return (
    <div>
      <AboutBanner />
      <AboutNavbar setActiveTab={setActiveTab} activeTab={activeTab} />
     
    </div>
  );
};

export default AboutCompany;
