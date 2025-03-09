import React, { useState } from "react";
import logo from "../../assets/img/sinil_logo.png";
import navWhite from "../../assets/img/nav_white.png";
import "../../assets/styles/main_section/header.css";
import { useLocation } from "react-router-dom";
import navGray from "../../assets/img/nav_gray.png";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const prefix = pathname.split("/")[1];
  const menus = [
    { id: 1, name: "회사소개", url: "" },
    { id: 2, name: "사업소개", url: "business" },
    { id: 3, name: "제품소개", url: "about" },
    { id: 4, name: "고객서비스", url: "customer-service" },
  ];

  const handleClickToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header>
      <div className="header-contents">
        <h1>
          <a href="/">
            <img src={logo} alt="Sinilfood Logo" />
          </a>
        </h1>
        <div className="nav-pc">
          {menus.map((menu) => (
            <a href={menu.url} className={`${prefix === menu.url && "active"}`}>
              {menu.name}
            </a>
          ))}
        </div>
        <img
          src={navWhite}
          alt="nav"
          className="nav-mo"
          onClick={handleClickToggleMenu}
        />
        {isOpenMenu && (
          <aside>
            <div className="header-contents">
              <h1>
                <a href="/">
                  <img src={logo} alt="Sinilfood Logo" />
                </a>
              </h1>
              <img
                src={navGray}
                alt="nav"
                className="nav-mo"
                onClick={handleClickToggleMenu}
              />
            </div>
            <div className="aside-contents-container">
              <div className="aside-contents">
                <p className="aside-contents-title">회사소개</p>
                <div className="aside-menus">
                  <p className="aside-menu">회사소개</p>
                  <p className="aside-menu">CI</p>
                  <p className="aside-menu">인증 및 허가증</p>
                </div>
                <div className="aside-menus">
                  <p className="aside-menu">찾아오시는 길</p>
                  <p className="aside-menu">연혁</p>
                  <p className="aside-menu">조직도</p>
                </div>
              </div>
              <div className="aside-contents">
                <p className="aside-contents-title">사업영역</p>
                <div className="aside-menus">
                  <p className="aside-menu">전용유 제작</p>
                  <p className="aside-menu">식용유 종류</p>
                  <p className="aside-menu">신재생에너지 사업</p>
                </div>
                <div className="aside-menus">
                  <p className="aside-menu">제조사 현황</p>
                  <p className="aside-menu">신일푸드 물류시스템</p>
                </div>
              </div>
              <div className="aside-contents">
                <p className="aside-contents-title">제품소개</p>
                <div className="aside-menus">
                  <p className="aside-menu">자사전용유 | 일반유</p>
                  <p className="aside-menu">프랜차이즈 전용유</p>
                </div>
              </div>
              <div className="aside-contents">
                <p className="aside-contents-title">고객서비스</p>
                <div className="aside-menus">
                  <p className="aside-menu">식용유 종류</p>
                  <p className="aside-menu">신재생에너지 사업</p>
                </div>
                <div className="aside-menus">
                  <p className="aside-menu">제조사 현황</p>
                  <p className="aside-menu">신일푸드 물류시스템</p>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </header>
  );
};

export default Header;
