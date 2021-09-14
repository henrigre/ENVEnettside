import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import React, { useState } from "react";
import { BiMoon } from "react-icons/bi";

function NavBar() {
  return (
    <div>
      {true ? (
        <div>
          <div className="NavBarMain">
            <div className="NavBarCenter">
              <NavLink
                exact
                to={{
                  pathname: "/",
                }}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="NavBarLogo"
                  src="/image001.png"
                  height="42px"
                  alt=""
                />
              </NavLink>
              <div className="midt">
                <label className="NavBarText"> PRODUKT</label>
                {/* <label className="NavBarText">USE CASE</label> */}
                <img
                  className="NavBarSun"
                  src="/image002.png"
                  height="30px"
                  alt=""
                />
                {/* <label className="NavBarText"> PRIS</label> */}
                <NavLink
                  exact
                  to={{
                    pathname: "/OmOss",
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <label className="NavBarText"> OM OSS</label>
                </NavLink>
              </div>
              <div className="TopRight">
                <NavLink
                  exact
                  to={{
                    pathname: "/LoggInn",
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="NavBarLoggInn">
                    <label>KONTAKT</label>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bugFrame"></div>
        </div>
      ) : (
        <div>
          <div className="NavBarMain">
            <div className="NavBarCenter">
              <img
                className="NavBarLogo"
                src="/image001.png"
                height="42px"
                alt=""
              />

              <div className="midt">
                <label className="NavBarText"> PRODUKT</label>
                <label className="NavBarText">USE CASE</label>
                <BiMoon
                  className="NavBarLogo"
                  size="30"
                  /* onClick={setDarkTheme(!darkTheme)} */
                />
                <label className="NavBarText"> PRIS</label>
                <label className="NavBarText"> OM OSS</label>
              </div>
              <div className="TopRight">
                <div className="NavBarLoggInn">
                  <label>LOGG INN</label>
                </div>
              </div>
            </div>
          </div>
          <div className="bugFrame"></div>
        </div>
      )}
    </div>
  );
}
export default NavBar;
