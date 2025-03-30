import React, { useEffect } from "react";
import AppRoutes from "./routes";
import "./App.css";
import { useLocation } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <AppRoutes />
    </div>
  );
};

export default App;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
