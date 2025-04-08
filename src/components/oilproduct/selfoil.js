import React from "react";
import "./selfoil.css";

// 자사 전용유 이미지 import
import self1 from "@assets/img/oilproduct/self/1.png";
import self2 from "@assets/img/oilproduct/self/2.png";
import self3 from "@assets/img/oilproduct/self/3.png";
import self4 from "@assets/img/oilproduct/self/4.png";
import self5 from "@assets/img/oilproduct/self/5.png";
import self6 from "@assets/img/oilproduct/self/6.png";
import self7 from "@assets/img/oilproduct/self/7.png";

// 일반유 이미지 import
import gen1 from "@assets/img/oilproduct/general/1.png";
import gen2 from "@assets/img/oilproduct/general/2.png";
import gen3 from "@assets/img/oilproduct/general/3.png";
import gen4 from "@assets/img/oilproduct/general/4.png";
import gen5 from "@assets/img/oilproduct/general/5.png";
import gen6 from "@assets/img/oilproduct/general/6.png";
import gen7 from "@assets/img/oilproduct/general/7.png";
import gen8 from "@assets/img/oilproduct/general/8.png";
import gen9 from "@assets/img/oilproduct/general/9.png";
import gen10 from "@assets/img/oilproduct/general/10.png";
import gen11 from "@assets/img/oilproduct/general/11.png";
import gen12 from "@assets/img/oilproduct/general/12.png";
import gen13 from "@assets/img/oilproduct/general/13.png";
import gen14 from "@assets/img/oilproduct/general/14.png";
import gen15 from "@assets/img/oilproduct/general/15.png";
import gen16 from "@assets/img/oilproduct/general/16.png";
import gen17 from "@assets/img/oilproduct/general/17.png";
import gen18 from "@assets/img/oilproduct/general/18.png";
import gen19 from "@assets/img/oilproduct/general/19.png";
import gen20 from "@assets/img/oilproduct/general/20.png";

function SelfOil() {
    // 자사 전용유 7개
    const selfOils = [
        { name: "백설 에이스 후라잉", image: self1 },
        { name: "해표 에이스 후라잉", image: self2 },
        { name: "에이스 프로", image: self3 },
        { name: "크리스피 후라잉오일", image: self4 },
        { name: "온리유 카놀라유", image: self5 },
        { name: "디오 콩식용유", image: self6 },
        { name: "으뜸유", image: self7 },
    ];

    // 일반유 20개
    const generalOils = [
        { name: "큐원 맑은 현미유", image: gen1 },
        { name: "백설 현미유", image: gen2 },
        { name: "백설 하이후라잉", image: gen3 },
        { name: "백설 슈퍼후라잉", image: gen4 },
        { name: "백설 옥수수유", image: gen5 },
        { name: "백설 카놀라유", image: gen6 },
        { name: "아삭바삭 후라잉오일", image: gen7 },
        { name: "해표 옥수수유", image: gen8 },
        { name: "해표 카놀라유", image: gen9 },
        { name: "오뚜기 골든후라잉오일", image: gen10 },
        { name: "해표 대두유 식용유", image: gen11 },
        { name: "올바른 콩식용유", image: gen12 },
        { name: "쉐프원 콩식용유", image: gen13 },
        { name: "오'쉐프 식용유", image: gen14 },
        { name: "오뚜기 식용유", image: gen15 },
        { name: "딱 한번만 옥수수유", image: gen16 },
        { name: "안심해요 식용유", image: gen17 },
        { name: "롯데푸드 콩식용유", image: gen18 },
        { name: "매직 프라이", image: gen19 },
        { name: "씨와이프로 정제돈지", image: gen20 },
    ];

    return (
        <div className="oil-container">
            {/* 자사 전용유 섹션 */}
            <h2 className="section-title">자사 전용유</h2>
            <div className="oil-list">
                {selfOils.map((oil, idx) => (
                    <div className="oil-item" key={idx}>
                        <img src={oil.image} alt={oil.name} />
                        <p>{oil.name}</p>
                    </div>
                ))}
            </div>

            {/* 구분선 */}
            <hr className="section-divider" />

            {/* 일반유 섹션 */}
            <h2 className="section-title">일반유</h2>
            <div className="oil-list">
                {generalOils.map((oil, idx) => (
                    <div className="oil-item" key={idx}>
                        <img src={oil.image} alt={oil.name} />
                        <p>{oil.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelfOil;
