import "../styles/NavBarMobil.css";
import React, { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

function NavBarMobil() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <div>
      <div className="NavBarMainMobil">
        <div className="NavBarCenterMobil">
          <img
            className="NavBarLogo"
            src="/image001.png"
            height="25px"
            alt=""
          />
        </div>
        {menuIsOpen ? (
          <div className="NavBarLeftMobil">
            <HiOutlineMenuAlt4
              color="#f1f2f2"
              size="30"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
          </div>
        ) : (
          <div>
            <div className="NavBarLeftMobil">
              <ImCross
                color="#f1f2f2"
                size="18"
                className="crossMargin"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              />
            </div>
            <div className="NavBarMenuMobil">
              <label className="NavBarTextMobil">Om oss</label>
              <label className="NavBarTextMobil">Produkt</label>
              <label className="NavBarTextMobil">Use cases</label>
              <label className="NavBarTextMobil">Pris</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default NavBarMobil;
