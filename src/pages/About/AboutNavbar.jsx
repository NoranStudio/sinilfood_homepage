import React from 'react';
import "./about-nav.css";

const aboutNavItems = [
  { name: "회사소개", path: "" },
  { name: "CI", path: "ci" },
  { name: "인증 및 허가증", path: "certifications" },
  { name: "찾아오시는 길", path: "location" },
  { name: "연혁", path: "history" },
  { name: "조직도", path: "organization" },
];

const AboutNavbar = ({ setActiveTab, activeTab }) => {
  return (
    <div className="about-nav">
      <ul>
        {aboutNavItems.map((item, index) => (
          <li
            className={activeTab === item.path ? "active" : ""}
            key={item.path}
            onClick={() => setActiveTab(item.path)}
          >
            <div className="about-nav-item">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutNavbar;
