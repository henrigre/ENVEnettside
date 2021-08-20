import NavBar from "../screens/NavBar";
import "../styles/Hjemmeside.css";
import { fadeIn } from "react-animations";

function Hjemmeside() {
  return (
    <div>
      <nav className="navBar">{NavBar()}</nav>
      <img className="shadowPhoto" src="/testHoved.png" width="100%" alt="" />
      <div className="boxInfo">
        <button className="boxInfoText">
          <label className="text">
            Tilretteleggingsarbeid for investeringer i næringseiendom er sterkt
            preget av manuelle prosesser og flaskehalser i informasjonsflyt,
            sammen med tunge lokale mappestrukturer. Domenekunnskap står sterkt
            og knytter opp kunnskap og risiko til den enkelte tilrettelegger.
            Summen av dagens virksomhet er en ekstremt ressurskrevende
            papirmølle, uten noen gode løsninger.<span> </span> ENVE er en
            programvare som inneholder de kritiske funksjonene som
            tilrettelegger har behov for i sin arbeidshverdag. Med nødvendige
            integrasjoner mot eksisterende systemer innen FDV klarer ENVE tilby
            en one-stop-shop for forvaltningsprosessen av næringseiendom. På
            denne måten vil vi fristille ressurser til mer verdiskapende arbeid
            og bidra til digitaliseringen i en av verdens mest største
            industrier.
          </label>
        </button>
      </div>
    </div>
  );
}
export default Hjemmeside;
