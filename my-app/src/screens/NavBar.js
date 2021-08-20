import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { BiMoon } from "react-icons/bi";

function NavBar() {
  return (
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
  );
}
export default NavBar;

/* <button className="backButtonStyle">
        <Link to="/">
          <IoIosArrowBack size={22}></IoIosArrowBack>
        </Link>
      </button>
      <div className="inputGroup-containerHeader">
        <label className="groupTextPopup">{group.groupName} </label>
      </div>
      <div className="sendTilVenner">
        <label className="display-sendTilVenner">Send koden til venner</label>
      </div>
      <div className="inputGroup-container">
        <input
          className="form-control GroupCodeBox "
          readOnly={true}
          value={group.id}
        />
        <CopyToClipboard text={group.id}>
          <FiCopy
            className="icon-copy"
            size={30}
            onClick={() => showCopiedText()}
          ></FiCopy>
        </CopyToClipboard>
      </div>
      <div className="kode-kopiert">
        <label id="myLabel" style={{ display: "none" }}>
          Kode kopiert
        </label>
      </div>
      <div className="navbarStyle">
        <div className="navbar">
          <NavLink
            exact
            to={{
              pathname: "/GroupPage",
              state: {
              },
            }}
          >
            <IoIosPodium size={40} className="navBarIcon"></IoIosPodium>
          </NavLink>
          <NavLink
            to={{
              pathname: "/GroupPageList",
              state: {

              },
            }}
          >
            <BsCheckCircle size={36} className="navBarIcon"></BsCheckCircle>
          </NavLink>
          <NavLink
            to={{
              pathname: "/GroupPageAdd",
              state: {
                
              },
            }}
          >
            <BsPencil size={33} className="navBarIcon"></BsPencil>
          </NavLink>
          <NavLink
            to={{
              pathname: "/GroupPageSetting",
              state: {
             
              },
            }}
          >
            <BsThreeDots size={40} className="navBarIcon"></BsThreeDots>
          </NavLink>
        </div>
        <div className="navbar-line"></div>
      </div> */
