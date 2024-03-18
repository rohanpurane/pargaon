import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { getCurrentLang, setCurrentLang, setCurrentTheme, getCurrentTheme } from '../../services/LocalStorageService'
import { getToken } from '../../services/LocalStorageService';
import '../../css-config/Theme.scss'
import daynight from '../../media/day-night.png'
import { useEffect, useState } from 'react';
import {linkNames} from './NavData'

function NavBar() {
  const currentLang = getCurrentLang()
  const { access_token } = getToken()
  const handleClose = (l) => {
    let language = l.currentTarget.id
    setCurrentLang(language)
    window.location.reload(true)
  }

  let currentTheme = getCurrentTheme()
  const [theme, setTheme] = useState(currentTheme.current_theme)
  const toggletheme = () => {
    if (theme === null) {
      setTheme("dark-theme")
      setCurrentTheme("dark-theme")
    }
    else if (theme === "light-theme") {
      setTheme("dark-theme")
      setCurrentTheme("dark-theme")
    }
    else {
      setTheme("light-theme")
      setCurrentTheme("light-theme")
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const [expanded, setExpanded] = useState(false);
  return (
    <Container>
      {linkNames.map((card, i) => {
        return (
        <Navbar expanded={expanded} variant="dark" className="fixed-top navColor " expand="lg" key={i}>
          <Container fluid>
            <Navbar.Brand><img src={daynight} alt="" style={{ width: "30px", height: "30px" }} srcset="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto" navbarScroll>
                <NavLink to="/" onClick={() => setExpanded(false)} className="nav-link">{currentLang.language === "mr" ? card.home_mr : card.home_en}</NavLink>
                <NavDropdown title={currentLang.language === "mr" ? card.village_mr : card.village_en} id="basic-nav-dropdown">
                  <NavDropdown.Item><NavLink to="/about" onClick={() => setExpanded(false)} className="nav-link text-dark">{currentLang.language === "mr" ? card.village_mr : card.village_en}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/governmentschemes" onClick={() => setExpanded(false)} className="nav-link text-dark">{currentLang.language === "mr" ? card.scemes_mr : card.scemes_en}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/gram" onClick={() => setExpanded(false)} className="nav-link text-dark">{currentLang.language === "mr" ? card.gram_mr : card.gram_en}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/business" onClick={() => setExpanded(false)} className="nav-link text-dark">{currentLang.language === "mr" ? card.topbusiness_mr : card.topbusiness_en}</NavLink></NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/latestupdates" onClick={() => setExpanded(false)} className="nav-link">{currentLang.language === "mr" ? card.updates_mr : card.updates_en}</NavLink>
                <NavLink to="/farming" onClick={() => setExpanded(false)} className="nav-link">{currentLang.language === "mr" ? card.farming_mr : card.farming_en}</NavLink>
                <NavDropdown title={currentLang.language === "mr" ? card.business_mr : card.business_en} id="basic-nav-dropdown">
                  <NavDropdown.Item><NavLink to="/businessresources" onClick={() => setExpanded(false)} className="nav-link text-dark">{currentLang.language === "mr" ? card.businesscat_mr : card.businesscat_en}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/traiding" onClick={() => setExpanded(false)} className="nav-link text-dark">{currentLang.language === "mr" ? card.trading_mr : card.trading_en}</NavLink></NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/contact" onClick={() => setExpanded(false)} className="nav-link">{currentLang.language === "mr" ? card.contact_mr : card.contact_en}</NavLink>
              </Nav>

              <Nav className="justify-content-end" style={{ width: "100%" }} >
                {access_token ? <NavLink to="/dashboard" onClick={() => setExpanded(false)} className="nav-link">Dashboard</NavLink> : <NavLink to="/login" onClick={() => setExpanded(false)} className="nav-link">{currentLang.language === "mr" ? card.login_mr : card.login_en}</NavLink>}
                <NavDropdown title={currentLang.language === "mr" ? card.lang_mr : card.lang_en} id="basic-nav-dropdown">
                  <NavDropdown.Item><NavLink to="#" className="nav-link text-dark" id="mr" onClick={handleClose}>मराठी</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="#" className="nav-link text-dark" id="en" onClick={handleClose}>English</NavLink></NavDropdown.Item>
                </NavDropdown>
                <button type="button" className="nav-link" onClick={() => toggletheme()}>
                  <img src={daynight} alt="" style={{ width: "20px", height: "20px" }} srcset="" />
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        )
      })}
    </Container>
  );
}

export default NavBar;