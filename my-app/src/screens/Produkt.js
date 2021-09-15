import NavBar from "../screens/NavBar";
import "../styles/Hjemmeside.css";
import "../styles/OmOss.css";
import "../styles/LoggInn.css";
import "../styles/Produkt.css";
import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";

function Produkt() {
  return (
    <div>
      <nav className="navBar">{NavBar()}</nav>

      <div className="boxInfoKontakt">
        <label className="kontaktText">
          Én samlet plattform som tilgjengeliggjør de verktøyene du som
          tilrettelegger trenger for å håndtere forvaltningsprosjekt fra a til å
        </label>
        <button className="bookButton ">
          <label className="bookText">Book en demo</label>
        </button>
      </div>
      <div className="imageBox">
        <div
          style={{
            backgroundImage: `url("/bunnBildeDark.jpg")`,
          }}
          className="imageBox2"
        >
          <div className="bunnLine"></div>
          <div className="bunnFlex">
            <div className="bunnBox">
              <label className="bunnText">+47 473 43 434</label>
              <label className="bunnText">konktakt@enve.no</label>
              <label className="bunnTextAdresse">
                Sem Sælands vei 1, Trondheim
              </label>
            </div>
            <div className="bunnBox">
              <div className="bunnKontakt">
                <div className="bunnKontaktTextBox">
                  <FaLinkedin
                    className="iconMarginTop"
                    color="white"
                    size="30"
                  />
                  <label className="bunnKontaktText ">linkedin/enve</label>
                </div>
                <div className="bunnKontaktTextBox">
                  <FaFacebook
                    className="iconMarginTop"
                    color="white"
                    size="30"
                  />
                  <label className="bunnKontaktText "> facebook/enve </label>
                </div>

                <div className="bunnKontaktTextBox">
                  <IoIosGlobe
                    className="iconMarginTop iconMarginLeft "
                    color="white"
                    size="35"
                  />
                  <label className="bunnKontaktText "> enve.no</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Produkt;
