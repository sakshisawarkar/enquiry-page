import React, { useRef, useState,  } from "react";
import "./Facilities.css";
import emailjs from "emailjs-com";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utility/facilities.json";
import { sliderSettings } from "../../utility/common";
import { ClipLoader } from "react-spinners";

const App = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_m29w99z",
          "template_gaany3m",
          formRef.current,
          "HPWUQAB9kkjcqJSod",
          setLoader(true)
        )
        .then(
          (result) => {
            console.log("EmailJS response:", result.text);
            setLoader(false);
            setMessage(true);
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            setErrors({});
          },
          (error) => {
            console.error("EmailJS error:", error.text);
            alert("FAILED: " + error.text);
          }
        )
        .catch((error) => {
          console.error("EmailJS catch error:", error);
          alert("FAILED: " + error.message);
        });
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="f-wrapper paddings">
      <div className="innerWidth f-container">
        <div className="f-head flexColCenter">
          <span className="primaryText">Work with us</span>
          <span className="secondaryText work-w-us-desc">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, <br />
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </span>
        </div>

        <div className="container work-w-us-container paddings">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 work-w-us">
              {/* left Side */}
              <span className="primaryText flexColCenter">
                Companies we’ve helped grow
              </span>
              <div className="ourdoc-left c-client-cont">
                <div className="image-container">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 client-g-img">
                      <img src="./diamondclg.png" alt="diamondclg" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 client-g-img">
                      <img src="./geetashikshan.png" alt="geetashikshan" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 client-g-img">
                      <img src="./mydenpg.png" alt="mydenpg" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="secondaryText">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <div className="row client">
                <div className="col-sm-3 col-md-3 col-lg-3 image-container">
                  <img src="./client.png" alt="client" />
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9 flexColStart">
                  <span className="primaryText per-name">Work with us</span>
                  <span className="secondaryText per-detail">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 work-w-us r-work-w-us">
              {/* right side */}
              <div className="flexColStart ourdoc-right">
                <div className="ourdoc-head flexColStart">
                  <h4 className="primaryText">Enquire Now</h4>
                  <p className="secondaryText ourdoc-detail">
                    Fill out the application below for a free consultation and
                    we’ll be in touch within one business day.
                  </p>
                  <div className="abt-btn">
                    <div className="r-form">
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-6 fore-enquiry">
                            <div className="form-group">
                              <label htmlFor="name">Name:</label>
                              <input
                                type="text"
                                className={`form-control ${
                                  errors.name ? "is-invalid" : ""
                                }`}
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && (
                                <div className="invalid-feedback">
                                  {errors.name}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 fore-enquiry">
                            <div className="form-group">
                              <label htmlFor="email">Email:</label>
                              <input
                                type="email"
                                className={`form-control ${
                                  errors.email ? "is-invalid" : ""
                                }`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <div className="invalid-feedback">
                                  {errors.email}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 fore-enquiry">
                            <div className="form-group">
                              <label htmlFor="phone">Phone:</label>
                              <input
                                type="text"
                                className={`form-control ${
                                  errors.phone ? "is-invalid" : ""
                                }`}
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                              {errors.phone && (
                                <div className="invalid-feedback">
                                  {errors.phone}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 fore-enquiry">
                            <div className="form-group">
                              <label htmlFor="message">
                                Do you have any other questions?
                              </label>
                              <input
                                className={`form-control ${
                                  errors.message ? "is-invalid" : ""
                                }`}
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12 fore-enquiry">
                            <div className="form-group">
                              <label>
                                What is the best way to contact you?
                              </label>
                              <select
                                className="form-control"
                                name="contactMethod"
                                value={formData.contactMethod}
                                onChange={handleChange}
                              >
                                <option value="phone">Phone Call</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="email">Email</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="submit-button">
                          <button type="submit" className="btn btn-primary">
                            {/* <ClipLoader /> */}
                            {/* Submit */}
                            {loader ? <ClipLoader /> : "Submit"}
                          </button>
                        </div>
                        {
                          message ? <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hello, </strong> Thank you
  <button type="button" onClick={() => setMessage(false)} class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> : " "
                        }
                      </form>
                    </div>
                    {/* <button className="button">
                      <a href="#">About Us</a>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter f-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
