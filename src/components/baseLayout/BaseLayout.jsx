import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./main_section/Header";
const BaseLayout = () => (
  <div
    className="base-layout"
    style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      maxWidth: "1920px",
    }}
  >
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default BaseLayout;
