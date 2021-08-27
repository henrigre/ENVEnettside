import NavBar from "../screens/NavBar";
import "../styles/Hjemmeside.css";
import "../styles/OmOss.css";
import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";

function OmOss() {
  return (
    <div>
      <nav className="navBar">{NavBar()}</nav>

      <div className="boxInfoOmOss">
        <label className="textOmOss">
          Teamet bak ENVE har utspring fra NTNU’s Entreprenørskole, og består i
          dag av 7 personer.
        </label>
        <div className="omOssRow">
          <div className="omOssCol">
            <button className="boxInfoTextOmOss">
              <label className="textOmOssBox">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
              </label>
            </button>
            <button className="boxInfoTextOmOss">
              <label className="textOmOssBox">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
              </label>
            </button>
            <button className="boxInfoTextOmOss">
              <label className="textOmOssBox">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
              </label>
            </button>
          </div>
          <div className="omOssCol">
            <button className="boxInfoTextOmOss">
              <label className="textOmOssBox">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
              </label>
            </button>
            <button className="boxInfoTextOmOss">
              <label className="textOmOssBox">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
              </label>
            </button>
            <button className="boxInfoTextOmOss">
              <label className="textOmOssBox">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
              </label>
            </button>
          </div>
        </div>
        <img
          className="shadowPhoto"
          src="/Omoss.jpg"
          height="20%"
          alt="second slide"
        />
      </div>
    </div>
  );
}
export default OmOss;
