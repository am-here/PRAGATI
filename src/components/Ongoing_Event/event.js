import React from "react";
import Heading from "../Heading/index";
import "./event.css";
import GoToTop from "../GoToTop";

// var event_name = "LOGO COMPETITION";

function Event() {
  // var reg_link =
  //   "https://docs.google.com/forms/d/e/1FAIpQLSfOOXUYLHLcfZeoX4BJ5o2rna3LHuRxqnOYdCYhNcCa0NaYlw/viewform";
  return (
    <section className="event_page">
      <div className="mar_add_event"></div>
      <Heading title="EVENTS" />
      <div className="content_row">
        <ul>
          <li className="heading-list">Category 1: Coding and Design</li>
          <ol>
            <li>a) Circuit Design</li>
            <li>b) Code-fiesta</li>
            <li>c) ML Mania</li>
          </ol>
          <li className="heading-list">Category 2: Innovation</li>
          <ol>
            <li>a) Innovative Idea Contest </li>
            <li>b) Innovative Model Contest</li>
            <li>c) Technical poster </li>
          </ol>
          <li className="heading-list">Category 3: Quiz and Mathematics</li>
          <ol>
            <li>a) Math Mania</li>

            <li>b) Quiz-o-mania </li>
            <li>c) Treasure Hunt</li>
          </ol>
          <li className="heading-list">Category 4: Gaming</li>
          <ol>
            <li>a) NFS Most Wanted</li>
            <li>b) FIFA</li>
            {/* <li>c) ML Mania</li> */}
          </ol>
          <li className="heading-list">Category 5: Robotics</li>
          <ol>
            <li>a) Robo FIFA </li>
            <li>b) Robo war</li>
            <li>c) Chase the maze</li>
            <li id="last-line">d) Line follower</li>
          </ol>
        </ul>
      </div>
      {/* <div className="content_row">
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
          <div className="reg"><a target="_blank" rel="noopener noreferrer" href={reg_link}>REGISTER</a></div>
        </div>
      </div>
      <Heading title="RULES" />
      <div className="rules">
        <div className="rules_points">
          <span className="numbering">①</span>
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
        </div>
        <div className="rules_points">
          <span className="numbering">④</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; The winning logo will be the property of MCKV
            INSTITUTE OF ENGINEERING from the date theyare received and will be
            used in all mediums required.
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">⑤</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Last Date for submission is 30th November, 2022.
          </span>
        </div>
      </div>
      <Heading title="GUIDELINES" />
      <div className="rules">
        <div className="rules_points">
          <span className="numbering">①</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Logo must include the word "PRAGATI 2k23".
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">②</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Logo must be an original work of the entrant.
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">③</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Logo may include any colour shapes or format.
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">④</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; Logo artwork should be at least 2 inches x 2
            inches.
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">⑤</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; File should be of high resolution (over 300dpi)
            and should look clean (not pixelated or bit-mapped) when viewed on
            screen at 100%.
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">⑥</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; The design can be submitted in any format. JPEG,
            .PNG, .PDF but the participant(s) will also be required to submit
            the source file EPS/CDR/SVG/PNG/PSD of the original file (The winner
            might belater asked to submit in Vector Format).
          </span>
        </div>
        <div className="rules_points">
          <span className="numbering">⑦</span>
          <span className="rule_point">
            &nbsp;&nbsp;&nbsp; All logo design must be adaptable onto any
            form/surface of MCKV INSTITUTE OF ENGINEERING-PRAGATI publicity
            materials, including but not limited to, websites, banners,
            letterheads, flyers, poster, etc.
          </span>
        </div>
      </div>
      <GoToTop /> */}
      <GoToTop />
    </section>
  );
}

export default Event;
