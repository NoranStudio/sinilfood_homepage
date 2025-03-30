import React from 'react';
import './BusinessNavbar.css';

const menuItems = [
  { id: '', text: '전용유 제작' },
  { id: 'types', text: '식용유 종류' },
  { id: 'renewable', text: '신재생에너지' },
  { id: 'manufacturers', text: '제조사 현황' },
  { id: 'logistics', text: '물류시스템' },
];

function BusinessNavbar({ activeTab, setActiveTab }) {
  return (
    <div className="business-navbar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={activeTab === item.id ? 'active' : ''}
            onClick={() => setActiveTab(item.id)}
          >
            <div className="business-nav-item">
              {item.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessNavbar;
