import "./EventContact.css";
import Card from "./Card";
function EventContact({ contact }) {
  const { incharge, SubCommittee, StudentMembers } = contact;
  return (
    <>
      <div className="eventContact_container">
        <h1 className="committeeHead">
          Event In-charge && Core committee members
        </h1>
        <div className="carousel-container">
          {incharge.map((m, i) => (
            <Card key={i} details={m} />
          ))}
        </div>
        <h1 className="committeeHead">Sub-committee Members</h1>
        <div className="carousel-container">
          {SubCommittee.map((m, i) => (
            <Card key={i} details={m} />
          ))}
        </div>
        <h1 className="committeeHead">Student committee members</h1>
        <div className="carousel-container">
          {StudentMembers.map((m, i) => (
            <Card key={i} details={m} />
          ))}
        </div>
      </div>
    </>
  );
}

export default EventContact;
