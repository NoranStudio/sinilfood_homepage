import React from "react";

import "./about-history-mobile.css";

const HistoryMobile = ({ historyItems }) => {
    return (
        <div className="about__history">
            <h1>(주)신일푸드가 걸어온 길</h1>
            <div className="about__history__graph-mobile">
                {historyItems.map((item) => (
                    <div className="about__history__graph-mobile__item">
                        <div className="about__history__graph-mobile__item__divider">
                            <div />
                        </div>
                        <div className="about__history__graph-mobile__item__content">
                            <img alt="about_history_img" src={item.img} />
                            <h2>{item.title}</h2>
                            <ul>
                                {item.items.map((i) => (
                                    <li>{i}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryMobile;
