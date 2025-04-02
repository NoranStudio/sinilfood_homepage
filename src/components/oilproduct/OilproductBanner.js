import React from 'react';
import './OilproductBanner.css';

{/* 
<div className="about-banner">
  <div className="about-banner__inner">
    <p className="about-banner__title">
      <span>대한민국 외식산업을 이끄는</span>
      <span>식용유 유통 및 푸드서비스</span>
    </p>
  </div>
</div> 
*/}

const OilproductBanner = () => {
  return (
    <div className="oilproduct-banner">
      <div className="oilproduct-banner__inner">
        <p className="oilproduct-banner__title">
          <span className="light-text">주식회사 신일푸드</span>
          <span className="bold-text">주요 제품</span>
        </p>
      </div>
    </div>
  );
};

export default OilproductBanner; 