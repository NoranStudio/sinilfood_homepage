// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 import
import Home from "./pages/Home/Home";
import CI from "./pages/About/components/CI";
import AboutCompany from "./pages/About/AboutCompany";
import AboutLayout from "./components/about/AboutLayout";
import FCProducts from "./pages/Business/FCProducts";
import CustomerSupport from "./pages/CustomerService/CustomerSupport";
import BaseLayout from "./components/baseLayout";
import Organization from "./pages/About/components/Organization";
import Location from "./pages/About/components/Location";
import History from "./pages/About/components/History";
import Certifications from "./pages/About/components/Certifications";
import OilProducts from "./pages/Products/oilproducts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/business" element={<FCProducts />} />
        <Route path="/customer-service" element={<CustomerSupport />} />
        <Route path="/products" element={<OilProducts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
