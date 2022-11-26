import React from "react";
import Heading from "../Heading/index";
import "./event.css";
import GoToTop from "../GoToTop";

// var event_name = "LOGO COMPETITION";

function Event() {
  return (
    <section className="event_page">
      <Heading title="EVENT" />
      <div className="content_row">
        <div className="content_col1">
          <img
            src={require(`../../resources/logo_comp.png`)}
            alt="Logo"
            className="content_img"
          />
        </div>
        <div className="content_col2">
          <p>Hello MCKVIANS ✨</p>
          <p>
            🎓MCKV Institute of Engineering is back with the most awaited event
            of the year, Pragati 2K23, its annual tech fest. This year there
            would be a logo design contest for PRAGATI 2023. The winner would be
            recognized and, the winning logo will be chosen as the official logo
            for PRAGATI 2023.
          </p>
          <p>🗓️Submission Date - 30th November,2022</p>
          <p>✅Open to all staff members and students of MCKVIE.</p>
        </div>
      </div>
      <Heading title="RULES" />
      <div className="rules">
        <div className="rules_points">
          <span className="numbering">①</span>
          {/* <span className="rule_point">&nbsp;&nbsp;&nbsp; The contest is open to all members of the staff and students of MCKV Institute of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Engineering.</span> */}
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; The contest is open to all members of the staff
            and students of MCKV Institute of Engineering.
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">②</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Themes for the contest are
          </span>
          <div className="sub_rules_points">
            <span className="sub_numbering">&nbsp;&nbsp;&nbsp;&nbsp;ⓐ</span>
            <span className="sub_rule_point">
              &nbsp;&nbsp;&nbsp; Technology
            </span>
          </div>
          <div className="sub_rules_points">
            <span className="sub_numbering">&nbsp;&nbsp;&nbsp;&nbsp;ⓑ</span>
            <span className="sub_rule_point">&nbsp;&nbsp;&nbsp; Robotics</span>
          </div>
          <div className="sub_rules_points">
            <span className="sub_numbering">&nbsp;&nbsp;&nbsp;&nbsp;ⓒ</span>
            <span className="sub_rule_point">
              &nbsp;&nbsp;&nbsp; Innovation
            </span>
          </div>
        </div>
        <div className="rules_points">
          <span className="numbering">③</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Participants can provide maximum one entry per
            theme and can take part in maximum of 2 themes.
          </span>
          {/* <span className="rule_point">&nbsp;&nbsp;&nbsp; Participants can provide maximum one entry per theme and can take part in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maximum of 2 themes.</span> */}
        </div>
        <div className="rules_points">
          <span className="numbering">④</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; The winning logo will be the property of MCKV
            INSTITUTE OF ENGINEERING from the date theyare received and will be
            used in all mediums required.
          </span>
          {/* <span className="rule_point">&nbsp;&nbsp;&nbsp; The winning logo will be the property of MCKV INSTITUTE OF ENGINEERING from the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date theyare received and will be used in all mediums required.</span> */}
        </div>
        <div className="rules_points">
          <span className="numbering">⑤</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Last Date for submission is 30th November, 2022.
          </span>
        </div>
      </div>
      <GoToTop />
    </section>
  );
}

export default Event;
