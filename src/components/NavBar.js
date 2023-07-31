import { useState, useEffect } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import br from "../assets/img/br.svg";
import us from "../assets/img/us.svg";

export const NavBar = ({ language, setLanguageFunction }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const buttonEnglish = "Let's Connect";
  const botaoPortugues = "Entrar em contato";

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className="container">
        <img
          src={language === "us" ? us : br}
          className="flag-icon"
          onClick={() => setLanguageFunction()}
        />
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {language === "us" ? "Skills" : "Habilidades"}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              {language === "us" ? "Projects" : "Projetos"}
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-victor-madeira"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="linkedin icon" />
              </a>
              <a
                href="https://www.instagram.com/joaomadeiraxyz/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon3} alt="instagram icon" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jo%C3%A3o-victor-madeira",
                  "_blank"
                )
              }
            >
              <span>{language === "us" ? buttonEnglish : botaoPortugues}</span>
            </button>
          </span>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
