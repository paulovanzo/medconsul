import "../styles/mainpage.css";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

function Header() {
  const username = localStorage.getItem("username");

  return (
    <header>
      <div className="header-functions">
        <div className="user-name">
          <label id="name-user">{username}</label>
          <BsPersonCircle size={30} color={"FFFFFF"} />
        </div>
        <div className="button-logout">
          <BiLogIn size={30} color={"FFFFFF"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
