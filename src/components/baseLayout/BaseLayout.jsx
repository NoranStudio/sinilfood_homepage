import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../header";
const BaseLayout = () => (
  <div className="base-layout">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default BaseLayout;
