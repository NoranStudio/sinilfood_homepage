import { Outlet } from "react-router-dom";
import AboutBanner from "./AboutBanner";
import AboutNavbar from "./AboutNavbar";
import "../../assets/styles/about.css";

const AboutLayout = () => {
  return (
    <div>
      <AboutBanner />
      <AboutNavbar />
      <Outlet />
    </div>
  );
};

export default AboutLayout;
