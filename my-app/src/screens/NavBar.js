import { Link, NavLink } from "react-router-dom";



function NavBar() {
  return (
    <div>
      
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
