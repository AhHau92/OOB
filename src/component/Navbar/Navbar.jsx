import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { links } from "../../data";
import { LiaBarsSolid } from "react-icons/lia";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarContainer = document.querySelector(
        ".container-fluid.container_navbar"
      );
      if (window.scrollY > 0) {
        navbarContainer.classList.add("scrolldown");
        setScrollDown(true);
      } else {
        navbarContainer.classList.remove("scrolldown");
        setScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="navbar">
      <div
        className={`container-fluid container_navbar ${
          scrollDown ? "scrolldown" : ""
        }`}
      >
        <div className="row row_navbar">
          <div className="innerWrapper">
            <div className="col-md-12 navbarWrapper">
              <div className="companyLogo">
                <Link to="/">
                  Gene
                </Link>
              </div>
              <div className="nav_itemList">
                <ul
                  className={`nav_links ${
                    isNavShowing ? "show_nav" : "hide_nav"
                  }`}
                >
                  {links.map(({ name, path }, index) => {
                    return (
                      <li key={index}>
                        <div className="anyNameWrapper">
                          <div className="anyName">
                            <NavLink
                              to={path}
                              className={({ isActive }) =>
                                isActive ? "active-nav" : ""
                              }
                              onClick={() => setIsNavShowing((prev) => !prev)}
                            >
                              {name}
                            </NavLink>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className="nav_toggle-btn"
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {isNavShowing ? <MdOutlineClose /> : <LiaBarsSolid />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
