import { useMediaQuery } from "react-responsive";
import logo from "../assets/img/sinil_logo.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../assets/img/menu.svg";

const navbarItems = [
  { name: "회사소개", path: "/about" },
  { name: "사업영역", path: "/business/fc-products" },
  { name: "제품소개", path: "/products" },
  { name: "고객서비스", path: "/customer-service/support" },
];

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation();

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Sinilfood Logo" />
      {isMobile ? (
        <MenuIcon className="navbar__menu" />
      ) : (
        <nav className="navbar__items">
          <ul>
            {navbarItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={
                    location.pathname.startsWith(item.path) ? "active" : ""
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
