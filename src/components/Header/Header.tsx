import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LinkedinLogo,
  GithubLogo,
  DotsThreeOutlineVertical,
  X,
} from "@phosphor-icons/react";
import resume from "/resume.pdf";
import "./header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 990) {
      setMobile(true);
    }
  }, []);

  const handleHome = () => {
    navigate("/");
  };

  const handleMobileMenu = () => {
    setMobileMenu(true);
  };

  const handleHideMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {mobile ? (
        <div
          style={{
            padding: "2%",
            backgroundColor: "#121212",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <img
            className="logo"
            src="/logo.svg"
            alt="Letter P Logo"
            onClick={handleHome}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            onClick={handleMobileMenu}
          >
            <DotsThreeOutlineVertical size={32} color="#ffffff" />
          </span>
          {mobileMenu && (
            <section className="mobileMenu">
              <span
                style={{ marginTop: "5%", marginBottom: "20%" }}
                onClick={handleHideMenu}
              >
                <X size={32} color="#d1d1d1" />
              </span>
              <Link
                to="/about"
                className="link-text mobile-text"
                onClick={handleHideMenu}
              >
                About
              </Link>
              <span
                className="link-text mobile-text"
                onClick={() => {
                  window.open(resume, "_blank");
                  handleHideMenu();
                }}
              >
                Resume
              </span>
              <span
                style={{
                  marginRight: "2rem",
                  cursor: "pointer",
                  marginTop: "5%",
                  marginBottom: "10%",
                }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/peyten-bevill",
                    "_blank"
                  );
                  handleHideMenu();
                }}
              >
                <LinkedinLogo size={32} color="#fdfcfc" />
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("https://github.com/peytenbevill", "_blank");
                  handleHideMenu;
                }}
              >
                <GithubLogo size={32} color="#fdfcfc" />
              </span>
            </section>
          )}
        </div>
      ) : (
        <div className="header-body">
          <img
            className="logo"
            src="/logo.svg"
            alt="Letter P Logo"
            onClick={handleHome}
          />
          <span className="links">
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "link-text-active"
                  : "link-text"
              }
            >
              About
            </Link>
            <span
              className={
                location.pathname === "/resume"
                  ? "span-text-active"
                  : "link-text"
              }
              onClick={() => {
                window.open(resume, "_blank");
              }}
            >
              Resume
            </span>
            <span
              style={{ marginRight: "2rem", cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/peyten-bevill",
                  "_blank"
                )
              }
            >
              <LinkedinLogo size={32} color="#fdfcfc" />
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://github.com/peytenbevill", "_blank")
              }
            >
              <GithubLogo size={32} color="#fdfcfc" />
            </span>
          </span>
        </div>
      )}
    </>
  );
};

export default Header;
