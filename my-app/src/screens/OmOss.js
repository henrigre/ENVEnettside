import NavBar from "../screens/NavBar";
import "../styles/Hjemmeside.css";
import "../styles/OmOss.css";
import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";

function OmOss() {
  return (
    <div>
      <nav className="navBar">{NavBar()}</nav>

      <div className="boxInfoOmOss">
        <div className="omOssCenter">
          <label className="textOmOss">
            Teamet bak ENVE har utspring fra NTNU’s Entreprenørskole, og består
            i dag av 7 personer.
          </label>
        </div>
        <div className="omOssRow">
          <div className="omOssCol">
            <button className="boxInfoTextOmOss">
              <label className="textOmOssNavn">Sander Haukdal Larsen</label>
              <label className="textOmOssStilling">CEO</label>
              <label className="textOmOssLinje">
                MSc NTNUs Entreprenørskole
              </label>
            </button>
            <button className="boxInfoTextOmOss">
              <label className="textOmOssNavn">Geir-Åsmund Haugland</label>
              <label className="textOmOssStilling">
                CCO & Produktansvarlig
              </label>
              <label className="textOmOssLinje">
                MSc NTNUs Entreprenørskole
              </label>
            </button>
          </div>
          <div className="omOssCol">
            <button className="boxInfoTextOmOss">
              <label className="textOmOssNavn">Tobias Eliassen</label>
              <label className="textOmOssStilling">CDO</label>
              <label className="textOmOssLinje">
                MSc industriell design, NTNU
              </label>
            </button>

            <button className="boxInfoTextOmOss">
              <label className="textOmOssNavn">Adrian Paulsen Hafeld</label>
              <label className="textOmOssStilling">CFO</label>
              <label className="textOmOssLinje">
                MSc Eiendomsutvikling og forvaltning, NTNU
              </label>
            </button>
          </div>
        </div>
        {/*         <div className="imageBox">
          <div
            style={{
              backgroundImage: `url("/OmossR.jpg")`,
            }}
            className="imageBox1"
          >
            <button className=" boxInfoTextOmOssImage">
              <label className="textOmOssBox">
                En sentral strategi er dannelsen av et konsortium bestående av
                det beste fra akademia, strategiske partnere, og 2-3
                bransjeaktører innen næringseiendom. På denne måten kan ENVE
                skape et helhetlig produkt som utvikles i samsvar med reelle
                behov i markedet, samtidig som at man utnytter den nyeste
                kunnskapen tilgjengelig.
              </label>
            </button>
          </div>
        </div> */}
        <div className="boxInfoOmOss">
          <label className="litenBoxTextOmOss">
            Partnere og samarbeidsaktører
          </label>
          <div className="samarbeidSvg">
            <img src="/NTNU.svg" width="20%" alt="" />
            <img className="svgTop" src="/Tlab.svg" width="15%" alt="" />
            <img src="/Trønderenergi.svg" width="25%" alt="" />
          </div>
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
    </div>
  );
}
export default OmOss;
