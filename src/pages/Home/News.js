import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import leftbutton from "../../assets/img/left_button.png";
import rightbutton from "../../assets/img/right_button.png";

import "../../assets/styles/main_section/news.css";

const News = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 실행
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {!isMobile && (
          <Swiper
            breakpoints={{
              768: { spaceBetween: 34, slidesPerView: 3.05 },
              480: { spaceBetween: 20, slidesPerView: 3 },
              0: { spaceBetween: 20, slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회프랜차이즈산업협회프랜차이즈산업협회프랜차이즈산업협회
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회너스위원회)]너스위스위원스위원스위원
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {isMobile && (
          <Swiper
            direction="vertical"
            spaceBetween={20}
            slidesPerView={3}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="news-slider-mo"
          >
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hover">
              <div className="new-news-item hover">
                <p className="new-news-notice">NOTICE</p>
                <p className="new-news-title">
                  프랜차이즈산업협회, 2024 제2회 상생파...
                </p>
                <p className="new-news-description">
                  [2024 제2회 파트너스데이 행사 모습 (제공=KFA
                  상생파트너스위원회)]한...
                </p>
                <span className="new-news-date">2024. 10. 21</span>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default News;
