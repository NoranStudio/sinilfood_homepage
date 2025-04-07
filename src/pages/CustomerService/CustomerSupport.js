import React, { useState, useEffect } from "react";
import CustomerSupportDesktop from "./CustomerSupportDesktop";
import CustomerSupportMobile from "./mobile/CustomerSupportMobile";
import "./CustomerSupport.css";
import { useMediaQuery } from "react-responsive";

function CustomerSupport() {
  const isMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  return isMobile ? <CustomerSupportMobile /> : <CustomerSupportDesktop />;
}

export default CustomerSupport;
