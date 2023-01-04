import "./Teachers.css";
// import Heading from "./../Heading/index";
import GoToTop from "./../GoToTop";
import Card from "../Event_Details/Card";
import tech_contact_data from "./Tech_Support";
import gen_contact_data from "./Gen_Support";

function Teachers() {
  // const [data, setData] = useState(Data);

  return (
    <>
      <div id="contact">
        {/* <Heading title="CONTACT" /> */}
        <div className="eventContact_container_T">
          <h1>TECH SUPPORT</h1>
          <div className="contact-container">
            {tech_contact_data.map((m, i) => (
              <Card key={i} details={m} />
            ))}
          </div>
        </div>
        <div className="eventContact_container_T">
          <h1>GENERAL SUPPORT</h1>
          <div className="contact-container">
            {gen_contact_data.map((m, i) => (
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
