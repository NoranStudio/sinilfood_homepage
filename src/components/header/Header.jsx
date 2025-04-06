import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import logo from "@assets/img/sinil_logo.png";
import navWhite from "@assets/img/nav_white.png";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navGray from "@assets/img/nav_gray.png";

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const prefix = pathname.split("/")[1];
    const menus = [
        { id: 1, name: "회사소개", url: "about" },
        { id: 2, name: "사업영역", url: "business" },
        { id: 3, name: "제품소개", url: "products" },
        //{ id: 4, name: "고객서비스", url: "customer-service" },
    ];

    const handleClickToggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    useEffect(() => {
        setIsOpenMenu(false);
    }, [isMobile]);

    useEffect(() => {
        // 스크롤 이벤트 핸들러
        const handleScroll = () => {
            // 헤더 높이 가져오기 (기본값 100px로 설정, 실제 헤더 높이에 맞게 조정 필요)
            const headerHeight = document.querySelector("header")?.offsetHeight || 100;

            // 스크롤 위치가 헤더 높이보다 크면 isScrolled를 true로 설정
            if (window.scrollY > headerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClickLink =
        (menu, subMenu = "") =>
        () => {
            setIsOpenMenu(false);
            navigate(menu, { state: { subMenu } });
        };

    return (
        <header className={isScrolled ? "scrolled" : ""}>
            <div className="header-contents">
                <Link to="/">
                    <img className="header-logo" src={logo} alt="Sinilfood Logo" />
                </Link>
                <div className="nav-pc">
                    {menus.map((menu) => (
                        <Link key={menu.id} to={menu.url} className={`${prefix === menu.url && "active"}`}>
                            {menu.name}
                        </Link>
                    ))}
                </div>
                <img src={navWhite} alt="nav" className="nav-mo" onClick={handleClickToggleMenu} />
                {isOpenMenu && (
                    <aside>
                        <div className="aside-header">
                            <div className="header-contents">
                                <Link to="/">
                                    <img className="header-logo" src={logo} alt="Sinilfood Logo" />
                                </Link>
                                <img src={navGray} alt="nav" className="nav-mo" onClick={handleClickToggleMenu} />
                            </div>
                            <div className="aside-contents-container">
                                <div className="aside-contents">
                                    <p className="aside-contents-title" onClick={handleClickLink("about")}>
                                        회사소개
                                    </p>
                                    <div className="aside-menus">
                                        <p className="aside-menu" onClick={handleClickLink("about")}>
                                            회사소개
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("about", "ci")}>
                                            CI
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("about", "cert")}>
                                            인증 및 허가증
                                        </p>
                                    </div>
                                    <div className="aside-menus">
                                        <p className="aside-menu" onClick={handleClickLink("about", "location")}>
                                            찾아오시는 길
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("about", "history")}>
                                            연혁
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("about", "organization")}>
                                            조직도
                                        </p>
                                    </div>
                                </div>
                                <div className="aside-contents">
                                    <p className="aside-contents-title" onClick={handleClickLink("business")}>
                                        사업영역
                                    </p>
                                    <div className="aside-menus">
                                        <p className="aside-menu" onClick={handleClickLink("business")}>
                                            전용유 제작
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("business", "types")}>
                                            식용유 종류
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("business", "renewable")}>
                                            신재생에너지 사업
                                        </p>
                                    </div>
                                    <div className="aside-menus">
                                        <p className="aside-menu" onClick={handleClickLink("business", "manufacturers")}>
                                            제조사 현황
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("business", "logistics")}>
                                            신일푸드 물류시스템
                                        </p>
                                    </div>
                                </div>
                                <div className="aside-contents">
                                    <p className="aside-contents-title" onClick={handleClickLink("products")}>
                                        제품소개
                                    </p>
                                    <div className="aside-menus">
                                        <p className="aside-menu" onClick={handleClickLink("products", "")}>
                                            자사전용유 | 일반유
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("products", "franchise")}>
                                            프랜차이즈 전용유
                                        </p>
                                    </div>
                                </div>
                                <div className="aside-contents">
                                    {/* 고객서비스 부분 주석처리
                                    <p className="aside-contents-title" onClick={handleClickLink("customer-service")}>
                                        고객서비스
                                    </p>
                                    <div className="aside-menus">
                                        <p className="aside-menu" onClick={handleClickLink("customer-service", "contact")}>
                                            식용유 종류
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("customer-service", "faq")}>
                                            신재생에너지 사업
                                        </p>
                                    </div>
                                    <div className="aside-menus">
                                        <p className="aside-menu" onClick={handleClickLink("customer-service")}>
                                            제조사 현황
                                        </p>
                                        <p className="aside-menu" onClick={handleClickLink("customer-service")}>
                                            신일푸드 물류시스템
                                        </p>
                                    </div>
                                    */}
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
