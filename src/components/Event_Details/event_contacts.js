import "./_contacts.css";
import Heading from "../Heading";

function Event_Contact(props) {
  return (
    <>
      <div id="event">
        <Heading title="CONTACTS" />
        <div class="container">
          <div class="card card0">
            <div class="border">
              <h2>Harsh Baid</h2>
              <div class="icons">
              <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/css/css_background_image.asp"><i class="fa fa-whatsapp fa-lg" aria-hidden="true"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/css/css_background_image.asp"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/css/css_background_image.asp"><i class="fa fa-mobile fa-lg" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          {/* <div class="card card1">
            <div class="border">
              <h2>Ben Stiller</h2>
              <div class="icons">
                <i class="fa fa-codepen" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-dribbble" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="card card2">
            <div class="border">
              <h2>Patrick Stewart</h2>
              <div class="icons">
                <i class="fa fa-codepen" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-dribbble" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Event_Contact;
