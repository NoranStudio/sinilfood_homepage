import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import shinliFoodImage from "@assets/img/SHINLI FOOD white.png"; // SHINLI FOOD 이미지
import bannerImg1 from "@assets/img/mainbanner1.png";
import bannerImg2 from "@assets/img/mainbanner2.png";
import bannerImg3 from "@assets/img/mainbanner3.png";
import bannerImg1Mo from "@assets/img/mainbanner1-mo.png";
import bannerImg2Mo from "@assets/img/mainbanner2-mo.png";
import bannerImg3Mo from "@assets/img/mainbanner3-mo.png";
import scrollDown from "@assets/img/scroll-down.png";

import "swiper/css";
import "./mainbanner.css";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const MainBanner = () => {
  const swiperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [isScrolled, setIsScrolled] = useState(false); // fixma #2 의견에 때라 지우든 계속 추가 하든 

  const handleScroll = () => {
    setIsScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const bannerData = [
    {
      pcImg: bannerImg1,
      mobileImg: bannerImg1Mo,
      title: (
        <>
          식용유 및 식품 유통 <br />
          전문기업 <b>신일푸드</b>
        </>
      ),
      description: (
        <>
          <b>신일푸드</b> 만의 독자적인 전용 물류 시스템으로 <br />
          전국적 유통 체인망이 구축되어 있습니다.
        </>
      ),
    },
    {
      pcImg: bannerImg3,
      mobileImg: bannerImg3Mo,
      title: <>국내 외식산업의 미래와 <br />함께하는 <b>신일푸드</b></>,
      description: (
        <>
          국내 외식산업의 성장과 함께, 풍부한 경험과 <br />
          독보적인 경쟁력으로 미래를 열어갑니다.
        </>
      ),
    },
    {
      pcImg: bannerImg2,
      mobileImg: bannerImg2Mo,
      title: (
        <>
          외식산업의 유지유통 <br />
          선도기업 <b>신일푸드</b>
        </>
      ),
      description: (
        <>
          깨끗하고 믿을 수 있는 식용유 및 푸드 유통기업 <br />
          신뢰와 품질을 보장하는 <b>신일푸드</b>
        </>
      ),
    },
  ];

  return (
    <div className="banner-section">
      <div className="banner-contents">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
        >
          {bannerData.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="banner-slide"
                style={window.innerWidth > 768 ? {
                  backgroundImage: `url(${banner.pcImg})`
                } : {
                  backgroundImage: `url(${banner.mobileImg})`
                }}
              >
                <div className="banner-content-wrapper">

                  <div className="scroll-down-wrapper">
                    <img
                      src={scrollDown}
                      alt="스크롤다운이미지"
                      className="scroll-down-img"
                    />
                  </div>
                  <div className="banner-texts">
                    <img src={shinliFoodImage} alt="신일푸드" />
                    <p className="banner-title">{banner.title}</p>
                    <p className="banner-description">{banner.description}</p>
                    <div className="banner-navigation">
                      <HiOutlineArrowNarrowLeft
                        onClick={() => swiperRef.current?.slidePrev()}
                      />
                      <b>{currentPage.toString().padStart(2, "0")}</b> <p>03</p>
                      <HiOutlineArrowNarrowRight
                        onClick={() => swiperRef.current?.slideNext()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainBanner;
