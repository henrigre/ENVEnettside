import NavBar from "../screens/NavBar";
import "../styles/Hjemmeside.css";
import "../styles/OmOss.css";
import "../styles/LoggInn.css";
import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";

function LoggInn() {
  const [selskap, setSelskap] = useState("");
  const [email, setEmail] = useState("");
  const [stilling, setStilling] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <nav className="navBar">{NavBar()}</nav>

      <div className="boxInfoKontakt">
        <label className="kontaktText">
          Er du interessert i å følge med på utviklingen i selskapet og å holde
          deg oppdatert på kommersialiseringsløpet? Meld deg på vårt nyhetsbrev
          som sendes ut en gang i kvartalet
        </label>
        <div>
          <input
            className="usernameBox"
            placeholder="e-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="usernameBox"
            placeholder="Selskap"
            value={selskap}
            onChange={(e) => setSelskap(e.target.value)}
          />
          <input
            className="usernameBox"
            placeholder="Stilling"
            type="stilling"
            value={stilling}
            onChange={(e) => setStilling(e.target.value)}
          />
          <textarea
            className="form-control feedbackBox"
            name="Text1"
            cols="40"
            rows="5"
            placeholder="Fortell oss gjerne om deg selv..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button className="sendButton sendMargin">
            <label className="sendText">Send</label>
          </button>
        </div>
        <label className="kontaktSander">
          Har du spørsmål om vår løsningen eller hvordan du kan bli involvert?
          Ta kontakt med vår daglige leder Sander Haukdal Larsen med mail +
          telefonnummer under.
        </label>
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
export default LoggInn;
