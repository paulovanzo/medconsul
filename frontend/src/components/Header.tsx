import { BsPersonCircle } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

import styles from "../styles/mainpage.module.css";

function Header() {
  const username = localStorage.getItem("username");

  return (
    <div className={styles.headMain}>
      <header>
        <div className={styles.headerFunctions}>
          <div className={styles.userName}>
            <label id="name-user">{username}</label>
            <BsPersonCircle size={30} color={"FFFFFF"} />
          </div>
          <div className={styles.buttonLogout}>
            <BiLogIn size={30} color={"FFFFFF"} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
