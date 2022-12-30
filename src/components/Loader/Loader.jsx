import "./style.css";
import pragati_load from "../../resources/pragati.gif";
function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner">
        <img src={pragati_load} alt="loader" draggable={false} />
      </div>
    </div>
  );
}

export default Loader;
