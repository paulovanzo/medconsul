import "../styles/mainpage.css";
import Header from "../components/Header";
import List from "../components/ListPatient";

function PagPatient() {
  return (
    <>
      <div className="head-main">
        <Header />
      </div>
      <List />
    </>
  );
}

export default PagPatient;
