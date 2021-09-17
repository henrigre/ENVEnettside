import NavBar from "../screens/NavBar";
import NavBarMobil from "../screens/NavBarMobil";
import "../styles/Hjemmeside.css";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import Modal from "react-modal";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
    //kommentar 
    <p> Test </p>
function Hjemmeside() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 850;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      {width > breakPoint ? (
        <div>
          <nav className="navBar">{NavBar()}</nav>

          <Slide>
            <div className="each-slide">
              <img
                className="shadowPhoto"
                src="/BakgrunnHoved.jpg"
                width="100%"
                alt="second slide"
              />
            </div>
            <div className="each-slide">
              <img
                className="shadowPhoto"
                src="/bakgrunnSecond1.jpg"
                width="100%"
                alt="second slide"
              />
            </div>
          </Slide>
          <div className="boxInfo">
            <img
              className="enveBox"
              src="/ENVEdarkmode.svg"
              width="26%"
              alt=""
            />

            <button className="boxInfoText">
              <label className="text">
                <label className="textCenter">
                  ENVE (test) effektiviserer informasjonsflyten, og automatiserer
                  finansiell- og operasjonell rapportering av næringseiendom.
                </label>
              </label>
              <label className="text">
                <span className="paragraf"> </span>
                Tilrettelegging av investering i næringseiendom er sterkt preget
                av manuelle prosesser og flaskehalser. I en av verdens eldste og
                mest veletablerte bransjer skjer det nå et avgjørende skifte mot
                digitalisering av de oppgaver som inngår i en meget
                ressurskrevende papirmølle. Store excel-ark, en-til-en
                distribusjon over mail og tunge mappestrukturer lokalt lagret er
                utdatert, og ENVE er det verktøyet som trengs for å håndtere
                kapitalkrevende investeringer.
              </label>
              <label className="text">
                ENVE samler den nødvendige funksjonaliteten som i dag er spredd
                over et flertall av forskjellige systemer inn i én eneste
                plattform som er skreddersydd for akkurat tilrettelegger sin
                rolle. På denne måten oppnås en helhetlig løsning som gir
                smidighet mellom de forskjellige rollene i et et
                forvaltningsprosjekt, slik at tilrettelegger fristilles til
                arbeid som faktisk skaper verdi. Ved å benytte ENVE vil man ikke
                bare spare verdifulle ressurser - man vil også oppnå konsis- og
                eksepsjonell datakvalitet som er med å løse en av de største
                utfordringene innen ESG-trender i eiendomsinvesteringer. Vi ser
                det som en langsiktig visjon å kunne bidra til miljøvennlige
                eiendomsinvesteringer gjennom datakvalitet.
                Tilretteleggingsarbeid for investeringer i næringseiendom er
                sterkt preget av manuelle prosesser og flaskehalser i
                informasjonsflyt, sammen med tunge lokale mappestrukturer.
                Domenekunnskap står sterkt og knytter opp kunnskap og risiko til
                den enkelte tilrettelegger. Summen av dagens virksomhet er en
                ekstremt ressurskrevende papirmølle, uten noen gode løsninger.
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
                    <label className="litenBoxText">DATAROM</label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">STYREPORTAL</label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">PORTEFØLJEOVERSIKT</label>
                  </button>
                </div>
                <div className="heleLitenBox">
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">AKSJEEIERBOK</label>
                  </button>

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
                    <label className="litenBoxText">DUE DILIGENCE</label>
                  </button>
                </div>
                <div className="heleLitenBox">
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">KONTAKTSTRØMANALYSE</label>
                  </button>
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
                    <label className="litenBoxText">E-SIGNERING</label>
                  </button>
                </div>
                <div className="heleLitenBox">
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">RAPPORTGENERERING</label>
                  </button>
                  <button
                    className="firstLitenBox"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <label className="litenBoxText">UTBYTTEBEREGNING</label>
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
              <label className="overskriftText">FOR TILRETTELEGGER</label>
              <div className="navbar-line"></div>
              <label className="text1">
                Én samlet plattform som tilgjengeliggjør de verktøyene du som
                tilrettelegger trenger for å håndtere forvaltningsprosjekt fra a
                til å.{" "}
              </label>{" "}
              <label className="text1">
                Med rollen som tilrettelegger bestemmer du hvem som skal ha
                tilgang til hva. Naviger enkelt mellom ulike prosjekt og opplev
                verdien av å ha all eksisterende dokumentasjon knyttet til dine
                investeringsprosjekt tilgjengeliggjort i det skybaserte
                datarommet. Naviger enkelt mellom ulike prosjekter, ferdigstill
                dokumentasjon og distribuer rapporter, regnskap og protokoller
                til dine interessenter - enkelt, oversiktlig og sikkert.
              </label>
            </button>

            <button className="førsteBoxInfoText">
              <div className="top2">
                <label className="overskriftText">FOR INVESTOR</label>
                <div className="navbar-line"></div>
                <label className="text1">
                  Få totaloversikt over dine aktive og arkiverte investeringer
                  med prosjektspesifikke KPI´er. Bla gjennom eksisterende
                  rapporter, og se spørsmål og merkander fra andre interessenter
                  direkte i dokumentasjonen. Still spørsmål til tilrettelegger i
                  den innebygde Q & A-funksjonen og få oversikt over
                  kapitalstrukturen i de ulike prosjektene. Motta all
                  informasjon knyttet til dine investeringen direkte i
                  plattformen, og få møteinnkallinger og oppdateringer
                  tilgjengeliggjort i én samlet plattform.
                </label>{" "}
                <label className="text1">
                  “Å holde seg løpende oppdatert på mine investeringer har aldri
                  vært enklere”.
                </label>
              </div>
            </button>
            <button className="førsteBoxInfoText">
              <div className="top1">
                <label className="overskriftText">FOR STYREMEDLEM</label>
                <div className="navbar-line"></div>
                <label className="text1">
                  Les deg opp på saksdokumenter og annen relevant informasjon om
                  investeringsprosjektet. Få oversikt over når neste styremøte
                  er, hvem som kommer og hvilke saker med tilhørende vedlegg som
                  skal behandles. Strukturer arbeidsflyten med din egen
                  gjøremålsliste og få varslinger om kommende møteaktivitet.
                  Signer protokoller og andre dokumenter direkte i plattformen
                  og opplev verdien av et digitalisert styreverv.
                </label>
              </div>
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
                      <label className="bunnKontaktText ">
                        {" "}
                        facebook/enve{" "}
                      </label>
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
            src="/mobilBackground1.jpg"
            width="100%"
            alt="second slide"
          />
          <div className="boxInfo">
            <img
              className="enveBoxMobil"
              src="/ENVEdarkmode.svg"
              width="26%"
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
            <button className="førsteBoxInfoTextMobil førsteBoxInfoTextMobilMargin">
              <div className="marginTop">
                <label className="overskriftTextMobil">FOR STYREMEDLEM</label>
                <div className="navbar-line"></div>
              </div>
              <label className="textMobil2">
                Les deg opp på saksdokumenter og annen relevant informasjon om
                investeringsprosjektet. Få oversikt over når neste styremøte er,
                hvem som kommer og hvilke saker med tilhørende vedlegg som skal
                behandles. Strukturer arbeidsflyten med din egen gjøremålsliste
                og få varslinger om kommende møteaktivitet. Signer protokoller
                og andre dokumenter direkte i plattformen og opplev verdien av
                et digitalisert styreverv.
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
                  <label className="bunnTextMobil">+47 473 43 434</label>
                  <label className="bunnTextMobil">konktakt@enve.no</label>
                  <label className="bunnTextAdresseMobil">
                    Sem Sælands vei 1, Trondheim
                  </label>
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

{
  /*           <div className="slideShow">
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
          </div> */
}
