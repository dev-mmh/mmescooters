import React, { memo, useEffect, useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, IconButton, Drawer,
  List, ListItem, ListItemText, MenuItem, Select, Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../assets/images/logo.jpeg";
import "../styles/header.css"; // Import separate CSS
import HeaderMenu from "./HeaderMenu";
import { useTranslation } from 'react-i18next';

// Import flag images
import USFlag from "../assets/images/myanmar.png";
import MMFlag from "../assets/images/us.png";
import CNFlag from "../assets/images/chinese.png";
import i18next from "i18next";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState(null);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const location = useLocation(); // Get the current route
  const [isShowProductMenu, setIsShowMenu] = useState(false);
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "en");
  }, [])

  const handleLanguageChange = (event) => {
    const language = event.target.value;

    setLanguage(language);
    i18next.changeLanguage(language);
    localStorage.setItem("language", language);
    // switch (language) {
    //   case "my":
    //     i18next.changeLanguage("mm")
    //     break;
    //     case "en":
    //       i18next.changeLanguage("en")
    //       break;
    //       case "cn":
    //       i18next.changeLanguage("cn")
    //       break;
    //   default:
    //     break;
    // }
  };

  const menuItems = [
    { text: t("header_home"), link: "/" },
    { text: t("header_about"), link: "/about" },
    { text: t("header_products"), link: "/products" },
    { text: t("header_spareparts"), link: "/spareparts" },
    { text: t("header_career"), link: "/career" },
    { text: t("header_blog&news"), link: "/blog-and-news" },
    { text: t("header_contact"), link: "/contact-us" },
  ];

  const languages = [
    { code: "en", label: t("header_language_en"), flag: MMFlag },
    { code: "mm", label: t("header_language_mm"), flag: USFlag },
    { code: "cn", label: t("header_language_cn"), flag: CNFlag },
  ];

  const _onClickMenu = (e, text) => {
    e.preventDefault();
    text === t("header_products") && setIsShowMenu(!isShowProductMenu)
  }

  return (
    <>
      <AppBar position="sticky" className="header-appbar" sx={{ background: "#00AC36", color: "#FFFFFF" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <IconButton edge="start" component={Link} to="/">
            <img src={Logo} alt="Logo" className="header-logo" />
          </IconButton>

          {/* Desktop Menu */}
          {!isMobile && (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.link}
                  onMouseEnter={(e) => _onClickMenu(e, item.text)}
                  className={`header-nav-button ${location.pathname === item.link ? "active-tab" : ""}`}
                >
                  {item.text}
                </Button>
              ))}

              {/* Language Selector */}
              <Select value={language} onChange={handleLanguageChange} className="header-language-selector">
                {languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code} className="header-language-option">
                    <img src={lang.flag} alt={lang.label} className="header-language-flag" />
                  </MenuItem>
                ))}
              </Select>
            </>
          )}

          {/* Mobile Menu Icon (Drawer Open Icon) */}
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} className="header-menu-icon">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {/* Mobile Drawer (Sidebar) */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} className="header-drawer">
          <Box className="header-drawer-container">
            {/* Logo at the top in mobile view */}
            <Box className="header-drawer-logo">
              <img src={Logo} alt="Logo" />
            </Box>

            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} component={Link} to={item.link} onClick={handleDrawerToggle}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}

              {/* Language Selector in Mobile Drawer */}
              <ListItem>
                <Select value={language} onChange={handleLanguageChange} fullWidth className="header-language-selector">
                  {languages.map((lang) => (
                    <MenuItem key={lang.code} value={lang.code} className="header-language-option">
                      <img src={lang.flag} alt={lang.label} className="header-language-flag" />
                      {lang.label}
                    </MenuItem>
                  ))}
                </Select>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar >
      {isShowProductMenu && <HeaderMenu onClose={() => setIsShowMenu(false)} />}</>

  );
};

export default memo(Header);
