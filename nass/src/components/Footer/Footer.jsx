import React from "react";
import "./Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const App = () => {
  return (
    <section className="footer paddings">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 logo">
            <div className="foot-logo">
              <img src="./logo.png" alt="logo" width={100} />
              <p className="secondaryText">
                We are always ready to listen and assist you with any technical
                services. Feel free to seek expert guidance for your business or
                career
              </p>
              <div className="social">
              <span className="primaryText foot-social-title">Social Media Links</span> <br />
             <div className="foot-social-icon">
             <a href="http://"><FaYoutube /></a>
             <a href="http://"><FaInstagramSquare /></a>
             <a href="http://"><FaLinkedin /></a>
             <a href="http://"><FaFacebookSquare /></a>
             
             </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 logo">
            <div className="f-menufoot">
              <a href="https://nasstechnologies.com/">Home</a>
              <a href="https://www.nasstechnologies.com/about.aspx">About Us</a>
              <a href="https://nasstechnologies.com/our-service.aspx">
                Services
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 meet">
            <span className="secondaryText per-detail">
              <b>Head Office</b>
              <br />
              Address: 1# 8/A, Ground Floor, 24th Main, 1st Cross, J.P. Nagar
              2nd Phase, Bangalore-560 078.
              <br /><br />
              <b>Brach Office</b>
              <br />
              Address: Plot No 2, Suri Layout, Nass Technologies Road, Behind
              Tirupati Bank Near Jafar Nagar, Nagpur-440013
            </span>
            <br /><br />
            <span>
              phone: <a href="tel:++91-82372 66 913">+91-82372 66 913</a>
            </span>
            <br />
            <span>
              Email:{" "}
              <a href="mailto:info@nasstechnologies.com">
                {" "}
                info@nasstechnologies.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
