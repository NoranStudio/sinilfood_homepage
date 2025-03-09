import React from 'react';

import logos from '../../assets/img/oilproduct/self/logos.png'; // 실제 경로에 맞춰 수정

function Genaral() {
  return (
    <div className="genaral-container">
      <h2 className="section-title">프랜차이즈 전용유</h2>

      <div className="logos-background">
        {/* 프랜차이즈 로고 이미지 배경 */}
        <img src={logos} alt="프랜차이즈 로고들" className="logos-image" />

        {/* 반투명 박스 + 텍스트 */}
        <div className="logos-overlay">
          <p className="overlay-text line1">200 여개 프랜차이즈</p>
          <p className="overlay-text line2">
            <span className="green-part">전국 15,000개 매장</span> <span className="black-part">전국 물류</span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Genaral;
