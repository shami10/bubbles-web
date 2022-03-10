import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

import Bubble from "../../assets/images/bubble-lg.png";
import "./style.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const form = useRef();
  useEffect(() => {
    console.log("gmail.com");
  }, []);

  const sendMail = () => {
    // e.preventDefault();
    console.log("level ho giya");
    if (name !== "" && email !== "" && msg !== "") {
      // SendMail({ name, email, msg });
      emailjs
        .sendForm(
          "service_qmjubj2",
          "template_gxlvzcd",
          form.current,
          "pjU7G7H5zAgwj8NGB"
        )
        .then(
          (result) => {
            setEmail("");
            setName("");
            setMsg("");
            alert("Message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div className="footer">
        <div className="particals">
          <Particles
            params={{
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 20,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.5,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  bubble: {
                    distance: 50,
                    duration: 2,
                    size: 2,
                    opacity: 0,
                  },
                  repulse: {
                    distance: 200,
                    duration: 2,
                  },
                },
              },
            }}
          />
        </div>
        <img src={Bubble} alt="bubble" className="left-bubble" />
        <img src={Bubble} alt="bubble" className="right-bubble" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact">
                <div className="contat-title mb-5">CONTACT US</div>
                <div className="contacts-info">
                  Phone :<a href="/">(646) 586 3347</a>
                </div>
                <div className="contacts-info">
                  Email :<a href="/">info@getbubblesapp.com</a>
                </div>
                <div className="contacts-info">
                  <h2>Mailing Address:</h2>
                  <p>
                    1444 5th Avenue Apt 7T <br /> New York, NY, 10017
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact">
                <div className="contat-title">Feel free to contact us</div>
                <div className="contat-des">
                  If you are interested in finding out more about Bubbles. If
                  you would like to join our listing and benefit from our
                  services.
                </div>
                <form ref={form}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="user_name"
                      value={name}
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      name="user_email"
                      type="email"
                      value={email}
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message </label>
                    <textarea
                      name="message"
                      type="text"
                      className="form-control"
                      rows={4}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="btn contact-btn"
                      type="button"
                      value="Send"
                      onClick={() => {
                        console.log("hwy not");
                        sendMail();
                      }}
                    />
                  </form>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                All &copy; Rights Reserved By Bubbles
              </div>
              <div className="col-lg-6 text-right">
                <Link to="/policy">Privacy & Terms of Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
