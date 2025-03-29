import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./about-nav.css";
const aboutNavItems = [
  { name: "회사소개", path: "introduction" },
  { name: "CI", path: "ci" },
  { name: "인증 및 허가증", path: "approvals" },
  { name: "찾아오시는 길", path: "path" },
  { name: "연혁", path: "history" },
  { name: "조직도", path: "organization" },
];

const AboutNavbar = ({ setActiveTab, activeTab }) => {
  const positions = useRef([]);
  const [highlight, setHighlight] = useState({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const activeIndex = aboutNavItems.findIndex(
      (item) => item.path === activeTab
    );
    const activeElement = positions.current[activeIndex];
    if (activeElement) {
      setHighlight({
        left: activeElement.offsetLeft,
        right: activeElement.offsetLeft + activeElement.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="about-nav">
      <ul>
        {aboutNavItems.map((item, index) => (
          <li
            className={activeTab === item.path ? "active" : ""}
            ref={(r) => (positions.current[index] = r)}
            key={item.path}
            onClick={() => setActiveTab(item.path)}
          >
            <Link>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutNavbar;
