import organizationImg from "@assets/img/about/organization.png";
import "./about-organization.css";

const Organization = () => {
    return (
        <div className="about__org">
            <h2>조직도</h2>
            <img className="about__org__img" alt="about_ci_img" src={organizationImg} />
        </div>
    );
};

export default Organization;
