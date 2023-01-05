import "./Teachers.css";
import Heading from "./../Heading/index";
import GoToTop from "./../GoToTop";
import Card from "../Event_Details/Card";
import tech_contact_data from "./Tech_Support";
import gen_contact_data from "./Gen_Support";

function Teachers(props) {
  var data = props.heading === "SUPPORT" ? tech_contact_data : gen_contact_data;
  return (
    <>
      <div id="contact">
        <Heading title={props.heading} />
        <div className="eventContact_container_T">
          <div className="contact-container">
            {data.map((m, i) => (
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
