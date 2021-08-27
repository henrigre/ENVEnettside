import NavBar from "../screens/NavBar";
import NavBarMobil from "../screens/NavBarMobil";
import "../styles/Hjemmeside.css";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import Modal from "react-modal";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Hjemmeside() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [riktigTekst, setRiktigTekst] = useState(0);

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 850;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  function showText(riktigTekst) {
    switch (riktigTekst) {
      case 0:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, pulvinar magna massa elementum, ut. Placerat volutpat viverra suspendisse nibh proin integer. Nisi blandit molestie cras dignissim. Mattis pulvinar scelerisque adipiscing dictum volutpat elit leo. Nunc dictumst at ut adipiscing morbi quam. Tortor non non pharetra.";
      case 1:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, pulvinar magna massa elementum, ut. Placerat volutpat viverra suspendisse nibh proin integer. Nisi blandit molestie cras dignissim. Mattis pulvinar scelerisque adipiscing dictum volutpat elit leo. Nunc dictumst at ut adipiscing morbi quam. Tortor non non pharetra.";
      default:
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, pulvinar magna massa elementum,";
    }
  }

  return (
    <div>
      {width > breakPoint ? (
        <div>
          <nav className="navBar">{NavBar()}</nav>
          <img
            className="shadowPhoto"
            src="/forside2.jpg"
            width="100%"
            alt="second slide"
          />
          {/*           <div className="slideShow">
            <Slide>
              <div className="each-slide">
                <img
                  className="shadowPhoto"
                  src="/forside1.jpg"
                  width="100%"
                  alt="first slide"
                />
              </div>
              <div className="each-slide">
                <img
                  className="shadowPhoto"
                  src="/forside2.jpg"
                  width="100%"
                  alt="second slide"
                />
              </div>
            </Slide>
          </div> */}

          <div className="boxInfo">
            <img className="enveBox" src="/envelight.png" width="26%" alt="" />
            <button className="boxInfoText">
              <label className="text">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
                Domenekunnskap står sterkt og knytter opp kunnskap og risiko til
                den enkelte tilrettelegger. Summen av dagens virksomhet er en
                ekstremt ressurskrevende papirmølle, uten noen gode løsninger.
                <span className="paragraf"> Hei </span> ENVE er en programvare
                som inneholder de kritiske funksjonene som tilrettelegger har
                behov for i sin arbeidshverdag. Med nødvendige integrasjoner mot
                eksisterende systemer innen FDV klarer ENVE tilby en
                one-stop-shop for forvaltningsprosessen av næringseiendom. På
                denne måten vil vi fristille ressurser til mer verdiskapende
                arbeid og bidra til digitaliseringen i en av verdens mest
                største industrier.
              </label>
            </button>
          </div>
          <div className="imageBox">
            <div
              style={{
                backgroundImage: `url("/midtbilde-light.jpg")`,
              }}
              className="imageBox1"
            >
              <div className="heleBox">
                <div className="heleLitenBox">
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">LEIETAKEROVERSIKT</label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">
                      DUE DILLIGENCE-REPORT
                    </label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">
                      LØPENDE VERDIVURDERING
                    </label>
                  </button>
                </div>
                <div className="heleLitenBox">
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">
                      SKYBASERT DOKUMENTARKIV
                    </label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">AKSJONÆRBOK</label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">RAPPORTGENERERING</label>
                  </button>
                </div>
                <div className="heleLitenBox">
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">KAPITALSTRUKTUR</label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">SIKKER DATAROM</label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">INTERESSENTOVERSIKT</label>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="førsteInfoBox">
            <button className="førsteBoxInfoText">
              <div className="marginTop">
                <label className="overskriftText">FOR FORVALTER</label>
                <div className="navbar-line"></div>
              </div>
              <label className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
                pulvinar magna massa elementum, ut. Placerat volutpat viverra
                suspendisse nibh proin integer. Nisi blandit molestie cras
                dignissim. Mattis pulvinar scelerisque adipiscing dictum
                volutpat elit leo. Nunc dictumst at ut adipiscing morbi quam.
                Tortor non non pharetra.
              </label>
            </button>
            <button className="førsteBoxInfoText førsteBoxInfoTextMargin">
              <div className="marginTop">
                <label className="overskriftText">FOR INVESTOR</label>
                <div className="navbar-line"></div>
              </div>
              <label className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
                pulvinar magna massa elementum, ut. Placerat volutpat viverra
                suspendisse nibh proin integer. Nisi blandit molestie cras
                dignissim. Mattis pulvinar scelerisque adipiscing dictum
                volutpat elit leo. Nunc dictumst at ut adipiscing morbi quam.
                Tortor non non pharetra.
              </label>
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
                  <label className="bunnText">+47 12 345 67</label>
                  <label className="bunnText">konktakt@enve.no</label>
                  <label className="bunnTextAdresse">Sem Sælands vei 1</label>
                  <label className="bunnTextAdresse">7034 Trondheim</label>
                  <label className="bunnTextAdresse">Norge</label>
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
                      <label className="bunnKontaktText ">
                        {" "}
                        facebook/enve{" "}
                      </label>
                    </div>
                    <div className="bunnKontaktTextBox">
                      <AiFillInstagram
                        className="iconMarginTop iconMarginLeft "
                        color="white"
                        size="35"
                      />
                      <label className="bunnKontaktText ">instagram/enve</label>
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
          <div className="modalBackground">
            {modalIsOpen ? (
              <Modal isOpen={modalIsOpen} className="modalContent">
                <div className="modalButton">
                  <button className="modalInfo">
                    <label className="modalOverskriftText">
                      LEIETAKEROVERSIKT
                    </label>
                    <label className="modalText">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Felis, pulvinar magna massa elementum, ut. Placerat
                      volutpat viverra suspendisse nibh proin integer. Nisi
                      blandit molestie cras dignissim. Mattis pulvinar
                      scelerisque adipiscing dictum volutpat elit leo. Nunc
                      dictumst at ut adipiscing morbi quam. Tortor non non
                      pharetra.
                    </label>
                  </button>
                </div>
                <label
                  onClick={() => setModalIsOpen(false)}
                  className="modalLukk "
                >
                  lukk
                </label>
              </Modal>
            ) : null}
          </div>
        </div>
      ) : (
        <div>
          <nav className="navBar">{NavBarMobil()}</nav>
          <img
            className="shadowPhoto"
            src="/forside2.jpg"
            width="100%"
            alt="second slide"
          />
          {/*  <div className="slideShow">
        <Slide>
          <div className="each-slide">
            <img
              className="shadowPhoto"
              src="/forside1.jpg"
              width="100%"
              alt="first slide"
            />
          </div>
          <div className="each-slide">
            <img
              className="shadowPhoto"
              src="/forside2.jpg"
              width="100%"
              alt="second slide"
            />
          </div>
        </Slide>
      </div> */}

          <div className="boxInfo">
            <img
              className="enveBoxMobil"
              src="/envelight.png"
              width="30%"
              alt=""
            />
            <button className="boxInfoTextMobil">
              <label className="textMobil">
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
                Domenekunnskap står sterkt og knytter opp kunnskap og risiko til
                den enkelte tilrettelegger. Summen av dagens virksomhet er en
                ekstremt ressurskrevende papirmølle, uten noen gode løsninger.
                <span className="paragraf"> Hei </span> ENVE er en programvare
                som inneholder de kritiske funksjonene som tilrettelegger har
                behov for i sin arbeidshverdag. Med nødvendige integrasjoner mot
                eksisterende systemer innen FDV klarer ENVE tilby en
                one-stop-shop for forvaltningsprosessen av næringseiendom. På
                denne måten vil vi fristille ressurser til mer verdiskapende
                arbeid og bidra til digitaliseringen i en av verdens mest
                største industrier.
              </label>
            </button>
          </div>
          <div className="imageBox">
            <div
              style={{
                backgroundImage: `url("/animertStartbilde.jpg")`,
              }}
              className="imageBox1"
            >
              <div className="heleBoxMobil">
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">LEIETAKEROVERSIKT</label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">DUE DILLIGENCE-REPORT</label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">LØPENDE VERDIVURDERING</label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">
                    SKYBASERT DOKUMENTARKIV
                  </label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">AKSJONÆRBOK</label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">RAPPORTGENERERING</label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">KAPITALSTRUKTUR</label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">SIKKER DATAROM</label>
                </button>
                <button
                  className="firstLitenBoxMobil"
                  onClick={() => setModalIsOpen(true)}
                >
                  <label className="litenBoxText">INTERESSENTOVERSIKT</label>
                </button>
              </div>
            </div>
          </div>
          <div className="førsteInfoBoxMobil">
            <button className="førsteBoxInfoTextMobil">
              <div className="marginTop">
                <label className="overskriftTextMobil">FOR FORVALTER</label>
                <div className="navbar-line"></div>
              </div>
              <label className="textMobil2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
                pulvinar magna massa elementum, ut. Placerat volutpat viverra
                suspendisse nibh proin integer. Nisi blandit molestie cras
                dignissim. Mattis pulvinar scelerisque adipiscing dictum
                volutpat elit leo. Nunc dictumst at ut adipiscing morbi quam.
                Tortor non non pharetra.
              </label>
            </button>
            <button className="førsteBoxInfoTextMobil førsteBoxInfoTextMobilMargin">
              <div className="marginTop">
                <label className="overskriftTextMobil">FOR INVESTOR</label>
                <div className="navbar-line"></div>
              </div>
              <label className="textMobil2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
                pulvinar magna massa elementum, ut. Placerat volutpat viverra
                suspendisse nibh proin integer. Nisi blandit molestie cras
                dignissim. Mattis pulvinar scelerisque adipiscing dictum
                volutpat elit leo. Nunc dictumst at ut adipiscing morbi quam.
                Tortor non non pharetra.
              </label>
            </button>
          </div>
          <div className="imageBox">
            <div
              style={{
                backgroundImage: `url("/bunnBildeDark.jpg")`,
              }}
              className="imageBox2"
            >
              <div className="bunnLineMobil"></div>
              <div className="bunnFlex">
                <div className="bunnBoxMobil">
                  <label className="bunnTextMobil">+47 12 345 67</label>
                  <label className="bunnTextMobil">konktakt@enve.no</label>
                  <label className="bunnTextAdresseMobil">
                    Sem Sælands vei 1
                  </label>
                  <label className="bunnTextAdresseMobil">7034 Trondheim</label>
                  <label className="bunnTextAdresseMobil">Norge</label>
                </div>
                <div className="bunnBoxMobil1">
                  <div className="bunnKontakt">
                    <div className="bunnKontaktTextBox">
                      <FaLinkedin
                        className="iconMarginTop"
                        color="white"
                        size="22"
                      />
                      <label className="bunnKontaktTextMobil ">
                        linkedin/enve
                      </label>
                    </div>
                    <div className="bunnKontaktTextBox">
                      <FaFacebook
                        className="iconMarginTop"
                        color="white"
                        size="22"
                      />
                      <label className="bunnKontaktTextMobil ">
                        {" "}
                        facebook/enve{" "}
                      </label>
                    </div>
                    <div className="bunnKontaktTextBox">
                      <AiFillInstagram
                        className="iconMarginTop iconMarginLeft "
                        color="white"
                        size="26"
                      />
                      <label className="bunnKontaktTextMobil ">
                        instagram/enve
                      </label>
                    </div>
                    <div className="bunnKontaktTextBox">
                      <IoIosGlobe
                        className="iconMarginTop iconMarginLeft "
                        color="white"
                        size="26"
                      />
                      <label className="bunnKontaktTextMobil "> enve.no</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalBackground">
            {modalIsOpen ? (
              <Modal isOpen={modalIsOpen} className="modalContentMobil">
                <div className="modalButton">
                  <button className="modalInfo">
                    <label className="modalOverskriftTextMobil">
                      LEIETAKEROVERSIKT
                    </label>
                    <label className="modalTextMobil">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Felis, pulvinar magna massa elementum, ut. Placerat
                      volutpat viverra suspendisse nibh proin integer. Nisi
                      blandit molestie cras dignissim. Mattis pulvinar
                      scelerisque adipiscing dictum volutpat elit leo. Nunc
                      dictumst at ut adipiscing morbi quam. Tortor non non
                      pharetra.
                    </label>
                  </button>
                </div>
                <label
                  onClick={() => setModalIsOpen(false)}
                  className="modalLukk "
                >
                  lukk
                </label>
              </Modal>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hjemmeside;
