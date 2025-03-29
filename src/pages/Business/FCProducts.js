import React, { useState, useEffect } from 'react';
import FCProductsDesktop from './FCProductsDesktop';
import FCProductsMobile from './mobile/FCProductsMobile';
import './FCProducts.css';
import businessBanner from '@assets/img/business/business_banner.png';
import businessBannerLogistics from '@assets/img/business/business_banner_logistics.png';
import { useMediaQuery } from 'react-responsive';

function FCProducts() {
    const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });
    const [activeTab, setActiveTab] = useState('manufacturing');

    // 배너 이미지 선택 로직
    const bannerImage = activeTab === 'logistics' ? businessBannerLogistics : businessBanner;

    return isMobile ? <FCProductsMobile /> : <FCProductsDesktop />;
}

export default FCProducts;
