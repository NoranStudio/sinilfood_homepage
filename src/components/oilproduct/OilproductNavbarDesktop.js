import React from 'react';
import '../business/BusinessNavbar.css';

function oilproductNavbarDesktop({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: 'selfoil', text: '자사 전용유 | 일반유', width: '192px' },
        { id: 'franchise', text: '프랜차이즈 전용유', width: '174px' }
    ];

    return (
        <div className="business-navbar-wrapper">
            <div className="business-navbar-container">
                <nav className="business-nav">
                    <ul className="business-nav-list">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={activeTab === item.id ? 'active' : ''}
                                onClick={() => setActiveTab(item.id)}
                            >
                                <span>{item.text}</span>
                                {activeTab === item.id && (
                                    <div className="active-indicator" style={{ width: item.width }} />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="nav-border-line" />
            </div>
        </div>
    );
}

export default oilproductNavbarDesktop;
