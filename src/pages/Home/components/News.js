import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import leftbutton from "@assets/img/left_button.png";
import rightbutton from "@assets/img/right_button.png";

import "./news.css";
import { useMediaQuery } from "react-responsive";

const News = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });
    const swiperRef = useRef(null);

    const newsData = [
        {
            type: "NOTICE",
            title: "신일푸드 홈페이지 리뉴얼",
            description: "신일푸드 홈페이지가 새로 리뉴얼되었습니다.",
            date: "2025. 04. 01",
        },
        {
            type: "NOTICE",
            title: "사업장 폐기물(폐식용유) 허가등록",
            description: "(주)신일푸드가 사업장 폐기물(폐식용유) 허가등록을 받았습니다.",
            date: "2024. 10. 10",
        },
        {
            type: "NOTICE",
            title: "(주) 신세계 이마트 업무협약 체결",
            description: "(주)신일푸드가 (주)신세계 이마트 업무협약을 체결했습니다.",
            date: "2024. 07. 01",
        },
        // ... 추가 뉴스 데이터
    ];

    const swiperConfig = isMobile
        ? {
              direction: "vertical",
              spaceBetween: 20,
              slidesPerView: 3,
              className: "news-slider-mo",
          }
        : {
              direction: "horizontal",
              breakpoints: {
                  768: { spaceBetween: 34, slidesPerView: 3.05 },
                  480: { spaceBetween: 20, slidesPerView: 3 },
                  0: { spaceBetween: 20, slidesPerView: 3 },
              },
          };

    return (
        <div className="new-news-section">
            <div className="wrapper">
                <div className="header">
                    <p className="title">
                        주식회사 신일푸드
                        <b> 새소식</b>
                    </p>
                    <div className="navigation">
                        <img
                            src={leftbutton}
                            alt="왼쪽 화살표"
                            className="arrow-img"
                            onClick={() => swiperRef.current?.slidePrev()}
                        />
                        <img
                            src={rightbutton}
                            alt="오른쪽 화살표"
                            className="arrow-img"
                            onClick={() => swiperRef.current?.slideNext()}
                        />
                    </div>
                </div>
                <Swiper {...swiperConfig} onSwiper={(swiper) => (swiperRef.current = swiper)}>
                    {newsData.map((news, index) => (
                        <SwiperSlide key={index} className="hover">
                            <div className="new-news-item hover">
                                <p className="new-news-notice">{news.type}</p>
                                <p className="new-news-title">{news.title}</p>
                                <p className="new-news-description">{news.description}</p>
                                <span className="new-news-date">{news.date}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default News;
