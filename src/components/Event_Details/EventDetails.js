import { QRCodeCanvas } from "qrcode.react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GoToTop from "../GoToTop";

import Heading from "../Heading";
import "./details.css";

function EventDetails({ setId, details }) {
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <>
      {details && (
        <div id="event">
          <Heading title="DETAILS" />
          <div className="event_container">
            <div className="event_image">
              <div className="qrcode">
                <QRCodeCanvas
                  id="qrCode"
                  value={details.googlr_Form}
                  size={300}
                  bgColor={"#fff"}
                  level={"H"}
                />
              </div>
            </div>
            <div className="event_details">
              <div className="event_name">{details.name}</div>
              <div className="event_closing_date">
                <i class="fa-solid fa-calendar-days fa-lg"></i>
                {details.date}
              </div>
              <div className="event_team_size">
                <i class="fa-solid fa-user-group"></i>
                {details.size}
              </div>
              <div className="event_fees">
                <i class="fa-solid fa-money-check-dollar"></i>{details.amtin}(only for MCKVIE students)
              </div>
              <div className="event_fees">
                <i class="fa-solid fa-money-check-dollar"></i>{details.amtout}
                  
                
              </div>
              <div className="event_buttons">
                <div className="event_rules">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={details.rules}
                  >
                    RULES
                  </a>
                </div>
                <div className="event_contacts">
                  <Link to="contact">CONTACT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <GoToTop />
    </>
  );
}

export default EventDetails;
