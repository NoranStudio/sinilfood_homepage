import React, { useEffect } from "react";
import { renderToString } from "react-dom/server";
import { ReactComponent as ArrowRightIcon } from "@assets/img/arrow-right.svg";
import "./map.css";

const info = {
  hwaseong: {
    center: { lat: 37.206002, lng: 126.985663 },
    title: "(주)신일푸드 화성지점",
    address: "경기도 화성시 매송면 매봉로123번길 23",
    phone: "055-334-7789",
    fax: "0303-3444-8883",
  },
  gimhea: {
    center: { lat: 37.564213, lng: 126.977694 },
    title: "(주)신일푸드 본점",
    address: "경상남도 김해시 생림면 상동로 78-63",
    phone: "055-334-7789",
    fax: "0303-3444-8883",
  },
};

const InfoOverlay = ({ title, address, phone, fax }) => (
  <div className="info-overlay">
    <div className="info-overlay__content">
      <p className="info-overlay__title">{title}</p>
      <p className="info-overlay__address">{address}</p>
      <div className="info-overlay__contact">
        <p>
          <span>T.</span> {phone}
        </p>
        <p>
          <span>F.</span> {fax}
        </p>
      </div>
    </div>
    <a
      className="info-overlay__link"
      href="https://map.naver.com/p/search/신일푸드?c=15.00,0,0,0,dh"
    >
      <p>지도보러가기</p>
      <ArrowRightIcon />
    </a>
  </div>
);

const KakaoMap = ({ className = "", position }) => {
  useEffect(() => {
    const container = document.getElementById("kakao-map");
    if (window?.kakao) {
      const options = {
        center: new window.kakao.maps.LatLng(
          info[position].center.lat,
          info[position].center.lng
        ),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      var marker = new window.kakao.maps.Marker({
        position: options.center,
      });
      marker.setMap(map);

      new window.kakao.maps.CustomOverlay({
        content: renderToString(InfoOverlay(info[position])),
        map,
        position: new window.kakao.maps.LatLng(
          info[position].center.lat,
          info[position].center.lng
        ),
      });
    }
  }, [position]);

  return <div id="kakao-map" className={className} />;
};

export default KakaoMap;
