import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 footer_item_list">
            <div className="footerCompanyName">Gene</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ratione aliquam tempora nemo, nulla quidem odio harum vero ex
              adipisci.
            </p>
          </div>
          <div className="col-md-3 col-12 footer_item_list">
            <h3>Office <div className="underline"><span></span></div></h3>
            <p>Jalan AA</p>
            <p>Taman BB Height</p>
            <p>Malaysia</p>
            <p className="email-id">abc@def.gmail.com</p>
            <h4>+6012 - 3456789</h4>
          </div>
          <div className="col-md-3 col-12 footer_item_list">
            <h3>Links <div className="underline"><span></span></div></h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
              <li>
                <Link to="/services">SERVICES</Link>
              </li>
              <li>
                <Link to="/process">PROCESS</Link>
              </li>
              <li>
                <Link to="/prices">PRICES</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12 footer_item_list">
            <h3>Newsletter <div className="underline"><span></span></div></h3>
            <form>
              <SlEnvolope />
              <input type="email" placeholder="Enter email id" required />
              <button type="submit">< AiOutlineArrowRight /></button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
