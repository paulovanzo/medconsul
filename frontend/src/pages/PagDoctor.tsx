import "../styles/mainpage.css";
import Header from "../components/Header";
import ListDoctor from "../components/ListDoctor";

function PagDoctor() {
  return (
    <>
      <div className="head-main">
        <Header />
      </div>
      <ListDoctor />
    </>
  );
}

export default PagDoctor;
