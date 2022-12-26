import "./Teachers.css";
import Heading from "./../Heading/index";
import GoToTop from "./../GoToTop";
import Card from "../Event_Details/Card";
import contact_data from "./Model.js";

function Teachers() {
  // const [data, setData] = useState(Data);

  return (
    <>
      <div id="contact">
        <Heading title="CONTACT" />
        <div className="eventContact_container_T">
          <div className="contact-container">
            {contact_data.map((m, i) => (
              <Card key={i} details={m} />
            ))}
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}

export default Teachers;
