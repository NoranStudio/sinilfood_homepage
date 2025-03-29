import React from 'react';
import FCProductsDesktop from './FCProductsDesktop';
import FCProductsMobile from './mobile/FCProductsMobile';
import './FCProducts.css';
import { useMediaQuery } from 'react-responsive';

function FCProducts() {
    const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });
    return isMobile ? <FCProductsMobile /> : <FCProductsDesktop />;
}

export default FCProducts;
