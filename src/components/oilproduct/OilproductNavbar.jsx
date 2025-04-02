import React from "react";
import "./OilproductNavbar.css";

const oilproductNavItems = [
  { name: "자사 전용유 | 일반유", path: "" },
  { name: "프랜차이즈 전용유", path: "franchise" },
];

const OilproductNavbar = ({ setActiveTab, activeTab }) => {
  return (
    <div className="oilproduct-nav">
      <ul>
        {oilproductNavItems.map((item, index) => (
          <li
            className={activeTab === item.path ? "active" : ""}
            key={item.path}
            onClick={() => setActiveTab(item.path)}
          >
            <div className="oilproduct-nav-item">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OilproductNavbar; 