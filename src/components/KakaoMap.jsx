import React, { useEffect } from "react";
import { renderToString } from "react-dom/server";
import { ReactComponent as ArrowRightIcon } from "@assets/img/arrow-right.svg";
import "./map.css";

const info = {
  hwaseong: {
    center: { lat: 37.206002, lng: 126.985663 },
    title: "(주)신일푸드 | 화성 지점",
    address: "경기도 화성시 매송면 매봉로123번길 23",
    phone: "055-334-7789",
    fax: "0303-3444-8883",
    link: "https://map.naver.com/p/search/%EC%8B%A0%EC%9D%BC%ED%91%B8%EB%93%9C%20%ED%99%94%EC%84%B1/place/1182019310",
  },
  gimhea: {
    center: { lat: 37.564213, lng: 126.977694 },
    title: "(주)신일푸드 본점",
    address: "경상남도 김해시 생림면 상동로 78-63",
    phone: "055-334-7789",
    fax: "0303-3444-8883",
    link: "https://map.naver.com/p/search/%EC%8B%A0%EC%9D%BC%ED%91%B8%EB%93%9C%20%EA%B9%80%ED%95%B4/place/1526541957",
  },
};

// const InfoOverlay = ({ title, address, phone, fax }) => (
//   <div className="info-overlay">
//     <div className="info-overlay__content">
//       <p className="info-overlay__title">{title}</p>
//       <p className="info-overlay__address">{address}</p>
//       <div className="info-overlay__contact">
//         <p>
//           <span>T.</span> {phone}
//         </p>
//         <p>
//           <span>F.</span> {fax}
//         </p>
//       </div>
//     </div>
//     <a
//       className="info-overlay__link"
//       href="https://map.naver.com/p/search/신일푸드?c=15.00,0,0,0,dh"
//     >
//       <p>지도보러가기</p>
//       <ArrowRightIcon />
//     </a>
//   </div>
// );

const SimpleOverlay = ({ title, address, phone, fax, link }) => (
  <div className="simple-overlay">
    <p className="simple-overlay__title">{title}</p>
    <p className="simple-overlay__address">{address}</p>
    <div className="simple-overlay__contact">
      <span>T. {phone}</span>
      <span>F. {fax}</span>
    </div>
    <a
      className="simple-overlay__link"
      href={link}
      target="_blank"
    >
      지도보러가기 <ArrowRightIcon />
    </a>
  </div>
);

const KakaoMap = ({ position }) => {
  // useEffect(() => {
  //   const container = document.getElementById("kakao-map");
  //   if (window?.kakao) {
  //     const options = {
  //       center: new window.kakao.maps.LatLng(
  //         info[position].center.lat,
  //         info[position].center.lng
  //       ),
  //       level: 3,
  //     };
  //     const map = new window.kakao.maps.Map(container, options);
  //     var marker = new window.kakao.maps.Marker({
  //       position: options.center,
  //     });
  //     marker.setMap(map);

  //     new window.kakao.maps.CustomOverlay({
  //       content: renderToString(InfoOverlay(info[position])),
  //       map,
  //       position: new window.kakao.maps.LatLng(
  //         info[position].center.lat,
  //         info[position].center.lng
  //       ),
  //     });
  //   }
  // }, [position]);

  return (
    <div id="kakao-map" className={`about__location__map ${position}`}>
      <SimpleOverlay {...info[position]} />
    </div>
  );
};

export default KakaoMap;
