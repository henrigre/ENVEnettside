import NavBar from "../screens/NavBar";
import "../styles/Hjemmeside.css";
import { fadeIn } from "react-animations";

function Hjemmeside() {
  return (
    <div>
      <nav className="navBar">{NavBar()}</nav>
      <img className="shadowPhoto" src="/infoBoxB.jpg" width="100%" alt="" />
      <div className="boxInfo">
        <img className="enveBox" src="/envelight.png" width="26%" alt="" />
        <button className="boxInfoText">
          <label className="text">
            Tilretteleggingsarbeid for investeringer i næringseiendom er sterkt
            preget av manuelle prosesser og flaskehalser i informasjonsflyt,
            sammen med tunge lokale mappestrukturer. Domenekunnskap står sterkt
            og knytter opp kunnskap og risiko til den enkelte tilrettelegger.
            Summen av dagens virksomhet er en ekstremt ressurskrevende
            papirmølle, uten noen gode løsninger.
            <span className="paragraf"> Hei </span> ENVE er en programvare som
            inneholder de kritiske funksjonene som tilrettelegger har behov for
            i sin arbeidshverdag. Med nødvendige integrasjoner mot eksisterende
            systemer innen FDV klarer ENVE tilby en one-stop-shop for
            forvaltningsprosessen av næringseiendom. På denne måten vil vi
            fristille ressurser til mer verdiskapende arbeid og bidra til
            digitaliseringen i en av verdens mest største industrier.
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
              <button className="firstLitenBox">
                <label className="litenBoxText">LEIETAKEROVERSIKT</label>
              </button>
              <button className="firstLitenBox">
                <label className="litenBoxText">DUE DILLIGENCE-REPORT</label>
              </button>
              <button className="firstLitenBox">
                <label className="litenBoxText">LØPENDE VERDIVURDERING</label>
              </button>
            </div>
            <div className="heleLitenBox">
              <button className="firstLitenBox">
                <label className="litenBoxText">SKYBASERT DOKUMENTARKIV</label>
              </button>
              <button className="firstLitenBox">
                <label className="litenBoxText">AKSJONÆRBOK</label>
              </button>
              <button className="firstLitenBox">
                <label className="litenBoxText">RAPPORTGENERERING</label>
              </button>
            </div>
            <div className="heleLitenBox">
              <button className="firstLitenBox">
                <label className="litenBoxText">KAPITALSTRUKTUR</label>
              </button>
              <button className="firstLitenBox">
                <label className="litenBoxText">SIKKER DATAROM</label>
              </button>
              <button className="firstLitenBox">
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
            dignissim. Mattis pulvinar scelerisque adipiscing dictum volutpat
            elit leo. Nunc dictumst at ut adipiscing morbi quam. Tortor non non
            pharetra.
          </label>
        </button>
        <button className="førsteBoxInfoText">
          <div className="marginTop">
            <label className="overskriftText">FOR INVESTOR</label>
            <div className="navbar-line"></div>
          </div>
          <label className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
            pulvinar magna massa elementum, ut. Placerat volutpat viverra
            suspendisse nibh proin integer. Nisi blandit molestie cras
            dignissim. Mattis pulvinar scelerisque adipiscing dictum volutpat
            elit leo. Nunc dictumst at ut adipiscing morbi quam. Tortor non non
            pharetra.
          </label>
        </button>
      </div>
      <div className="imageBox">
        <div
          style={{
            backgroundImage: `url("/bunnbildedark.jpg")`,
          }}
          className="imageBox2"
        >
          <div className="bunnLine"></div>
          <div className="bunnBox">
            <label className="text">+47 12 345 67 Norge</label>
            <label className="text">konktakt@enve.no</label>
            <label className="text">
              Sem Sælands vei 1 7034 Trondheim Norge
            </label>
          </div>
          <div>
            <label className="text"></label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hjemmeside;
