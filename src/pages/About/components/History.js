import React from "react";
import { useMediaQuery } from "react-responsive";
import HistoryMobile from "./HistoryMobile";

import history2024Img from "@assets/img/about/history/2024.png";
import history2023Img from "@assets/img/about/history/2023.png";
import history2022Img from "@assets/img/about/history/2022.png";
import history2019Img from "@assets/img/about/history/2019.png";
import history2015Img from "@assets/img/about/history/2015.png";
import history2013Img from "@assets/img/about/history/2013.png";

import "./about-history.css";

const historyItems = [
  {
    title: "2024년 연말 결산",
    items: [
      "(주) 신일푸드 사업장 폐기물(폐식용유) 허가등록",
      "(주) 신세계 이마트 업무협약 체결",
      "(주) SSG 업무협약 체결",
      "(주) 신일푸드 전용유 개발 - 디오(B&B)",
      "부산 모라 복지관 매월 식용유 후원",
      "(주) 한국프랜차이즈산업협회 회원등록",
      "(주) 신일푸드 전용유 개발 - 으뜸유(하이브)",
    ],
    img: history2024Img,
  },
  {
    title: "2023년",
    items: [
      "(주) 신일푸드 화성지점 설립 (서울/경기)",
      "(주) 신일푸드 전용유 개발 - 온리유 (하이브)",
    ],
    img: history2023Img,
  },
  {
    title: "2022년",
    items: [
      "(주) 하이브 업무협약 체결",
      "(주) 비앤비코리아 업무협약 체결",
      "(주) 프레시웨이 업무협약 체결",
      "(주) 신일푸드 전용유 개발 - 프로 에이스(대경오엔티)",
      "(주) 신일푸드 일반 폐기물(폐식용유) 허가등록",
    ],
    img: history2022Img,
  },
  {
    title: "2019년",
    items: [
      "(주) 신일푸드 법인 설립",
      "(주) 신일푸드 사옥 설립",
      "(주) 오뚜기 업무협약 체결",
    ],
    img: history2019Img,
  },
  {
    title: "2015년 신일유통 전용유 개발",
    items: [
      "에이스후라잉 (씨제이제일제당/사조대림)",
      "크리스피후라잉 (씨제이제일제당)",
    ],
    img: history2015Img,
  },
  {
    title: "2013년 신일유통 창립",
    items: [
      "(주) 씨제이제일제당 업무협약 체결",
      "(주) 사조대림 업무협약 체결",
      "(주) 대경오엔티 업무협약 체결",
    ],
    img: history2013Img,
  },
];

const History = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  if (isMobile) {
    return <HistoryMobile historyItems={historyItems} />;
  } else {
    return (
      <div className="about__history">
        <h1>(주)신일푸드가 걸어온 길</h1>
        <div className="about__history__graph">
          {historyItems.map((item) => (
            <div className="about__history__graph__item">
              <div className="about__history__graph__item__content">
                <h2>{item.title}</h2>
                <ul>
                  {item.items.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="about__history__graph__item__divider">
                <div />
              </div>
              <img alt="about_history_img" src={item.img} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default History;
