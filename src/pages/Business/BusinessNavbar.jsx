import { Link } from "react-router-dom";
import "./business-nav.css";
const businessNavItems = [
  { name: "전용유 제작", path: "manufacturing" },
  { name: "식용유 종류", path: "types" },
  { name: "신재생에너지 사업", path: "renewable" },
  { name: "제조사 현황", path: "manufacturers" },
  { name: "신일푸드 물류시스템", path: "logistics" },
];

const BusinessNavbar = ({ setActiveTab, activeTab }) => {
  return (
    <div className="business-nav">
      <ul>
        {businessNavItems.map((item, index) => (
          <li
            className={activeTab === item.path ? "active" : ""}
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

export default BusinessNavbar;
