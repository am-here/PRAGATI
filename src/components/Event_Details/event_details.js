import "./details.css";
import Heading from "../Heading";

function Event_Detail(props) {
    return (
        <>
            <div id="event">
                <Heading title="DETAILS" />
                <div className="event_container">
                    <div className="event_image">
                        <img draggable={false} src={require(`../../resources/qrcode.png`)} alt="" className="qrcode" />
                    </div>
                    <div className="event_details">
                        <div className="event_name">{props.name}</div>
                        <div className="event_closing_date">
                            <i class="fa-solid fa-calendar-days fa-lg"></i>
                            {props.date}
                        </div>
                        <div className="event_team_size">
                            <i class="fa-solid fa-user-group"></i>
                            {props.size}</div>
                        <div className="event_fees">
                            <i class="fa-solid fa-money-check-dollar"></i>
                            ₹{props.amt}</div>
                        <div className="event_buttons">
                            <div className="event_rules"><a target="_blank" rel="noopener noreferrer" href={props.rules}>RULES</a></div>
                            <div className="event_contacts"><a target="_blank" rel="noopener noreferrer" href={props.contacts}>CONTACT</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Event_Detail;
