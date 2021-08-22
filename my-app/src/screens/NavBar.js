import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { BiMoon } from "react-icons/bi";

function NavBar(darkTheme) {
  return (
    <div>
      {darkTheme ? (
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
                <img
                  className="NavBarSun"
                  src="/image002.png"
                  height="30px"
                  alt=""
                  /*  onClick={setDarkTheme(!darkTheme)} */
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
