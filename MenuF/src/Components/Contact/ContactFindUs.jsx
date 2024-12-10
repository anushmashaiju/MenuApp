import "./ContactFindUs.css";
import { GiRotaryPhone } from "react-icons/gi";
import { MdMailOutline } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
function ContactFindUs() {
  return (
    <section className="contact-find-us">
      {/* Connect with Us Section */}
      <div className="contact-section1">
        <h3 className="section-title">Connect with Us</h3>
        <ul className="contact-list">
          <li className="contact-item">
            <GiRotaryPhone className="contact-item-icon"/>
            <span >+91 95678 33430</span>
          </li>
          <li className="contact-item">
            <MdMailOutline className="contact-item-icon"/>
            <span >info@deepnetsoft.com</span>
          </li>
        </ul>
      </div>

      {/* Deep Net Soft Section */}
      <div className="contact-section2">
        <img src="images/Logo (1).png" alt="Logo" className="contact-logo" />
        <div className="section-title-logo">
          <span className="title-blue">DEEP</span>
          <span className="title-white"> NET</span>
          <span className="title-grey"> SOFT</span>
        </div>
        <div className="contact-list-social">

          <FiFacebook />
          <CiTwitter />
          <CiYoutube />
          <CiInstagram />

        </div>
      </div>
      {/* Find Us Section */}
      <div className="find-us-section">
        <h3 className="section-title">Find Us</h3>
        <div className="find-us-details">
          <IoLocationOutline className="contact-item-icon"/>
          <span> First Floor, G50 Infopark,
            <p>Infopark Expressway, Kakkanad, Kerala</p></span>
        </div>
      </div>
    </section>
  );
}

export default ContactFindUs;
