import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { FaRegWindowClose } from "react-icons/fa";

import styles from "../styles/sidebar.module.css";
import imgToggle from "../icons/toggleSidebar.png";

import { Context } from "../contexts/AuthContext";
import { Logo } from "./MainLogo";

function Header() {
  const [toggle, setToggle] = useState(false);

  const { handleLogout } = useContext(Context);

  const username = localStorage.getItem("username");

  return (
    <header className={styles.headMain}>
      <div
        className={toggle == false ? styles.toggleSidebar : styles.hiddenToggle}
      >
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img src={imgToggle} />
        </button>
      </div>
      <aside
        className={toggle == false ? styles.container : styles.containerActive}
      >
        <div className={styles.containerLogo}>
          <label className={styles.firstName}>Med</label>
          <label className={styles.lastName}>consul</label>
        </div>

        <ul className={styles.sectionButtons}>
          <li>
            <Link to={`/doctor`}>Gerenciar médico</Link>
          </li>
          <li>
            <Link to={`/appontiment`}>Gerenciar Agenda</Link>
          </li>
          <li>
            <Link to={`/patient`}>Gerenciar Paciente</Link>
          </li>
        </ul>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <FaRegWindowClose
            className={styles.buttonClose}
            onClick={() => {
              setToggle(!toggle);
            }}
            size={30}
          />
        </div>
      </aside>

      <div className={styles.userName}>
        <label id="name-user">{username}</label>
        <BsPersonCircle size={30} color={"FFFFFF"} />
      </div>
      <div className={styles.logoutButton}>
        <BiLogIn onClick={handleLogout} size={30} color={"FFFFFF"} />
      </div>
    </header>
  );
}

export default Header;
