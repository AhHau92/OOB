// import React from "react";
import "./Profile.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import Hello from "../../Image/Hello.png";
import Pic1 from "../../Image/profile-pic1.png";
import CountUp from "react-countup";
import Moon from "../../Image/profile_moon.png";
import SpointImg from "../../Image/services_point.png";
import Wording from "../../Image//wording1.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="profile">
      <div className="container-fluid container_profile">
        <div className="row row_profile">
          <div className="innerWrapper2">
            <div className="col-md-12 profile_titleWrapper">
              <div
                className="profileBigTitle"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                WE’RE GENE CREATIVE
              </div>
              <div
                className="profileLine"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-offset="200"
                data-aos-delay="500"
              ></div>
              <div
                className="profileSmallTitle"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="200"
                data-aos-delay="900"
              >
                Inspiration For You.
                <span>Think Outside Of The Box.</span>
              </div>
            </div>
            <div className="col-md-12 sec1downButton text-center">
              <Link to="#">
                <AiOutlineArrowDown />
              </Link>
            </div>

            <div className="col-md-12 helloSec">
              <div className="helloSecLeft">
                <div
                  className="helloSecLeftPic1"
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500"
                >
                  <img className="img-fluid" src={Hello} alt="" />
                </div>
                <div
                  className="helloSecLeftPic2"
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0"
                >
                  <img className="img-fluid" src={Pic1} alt="" />
                </div>
              </div>
              <div className="helloSecRight">
                <div
                  className="helloSecRightTitle"
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500"
                >
                  GENE CREATIVE
                </div>
                <div
                  className="helloSecRightLine"
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-offset="180"
                  data-aos-delay="900"
                ></div>
                <div
                  className="pWrapper"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="1400"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo quidem quaerat veritatis veniam rem illum debitis a vel
                    vitae reprehenderit? Officia molestias modi cupiditate! A et
                    harum dolores, labore eos fugiat assumenda ipsa velit vel
                    nobis, quos eius! Accusantium, magnam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum officia nostrum nisi magnam. Totam iste aliquid
                    deserunt, commodi earum quisquam quod ex veritatis! Adipisci
                    architecto non odit placeat inventore maiores soluta totam?
                    Dolores, praesentium accusantium dignissimos voluptas
                    dolorem corrupti atque?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi enim animi reiciendis! Asperiores est fuga pariatur
                    iste vero itaque quia incidunt quaerat laborum? Quasi beatae
                    ex iusto dolorum corporis necessitatibus, adipisci saepe
                    facere aliquam, ducimus minus perspiciatis facilis, in nam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 runingNumber">
              <div className="stats">
                <div className="stat">
                  <span>
                    <CountUp start={0} end={189} duration={8} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Premium Products</span>
                </div>

                <div className="stat">
                  <span>
                    <CountUp start={0} end={919} duration={8} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Happy Customer</span>
                </div>

                <div className="stat">
                  <span>
                    <CountUp end={101} duration={8} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Award Winnings</span>
                </div>
              </div>
            </div>

            <div className="row servicesWrapper">
              <div className="col-md-12 moonwrapper">
                <div className="moon" data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                  <img className="img-fluid" src={Moon} alt="" />
                </div>
              </div>
              <div className="col-md-12 text-center servicesTitle" data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="200">
                OUR SERVICES
              </div>
              <div className="col-md-12 servicesLineWrapper p-0">
                <div className="servicesLine" data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="700"></div>
              </div>
              <div className="col-md-12 servicesPoints">
                <div className="Spoint" data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="350"
                  data-aos-delay="0">
                  <div className="Spoint_img">
                    <img className="img-fluid" src={SpointImg} alt="" />
                  </div>
                  <div className="Spoint_title">
                    Menu
                    <br />
                    Design
                  </div>
                  <div className="SpointLine"></div>
                </div>
                <div className="Spoint" data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="350"
                  data-aos-delay="0">
                  <div className="Spoint_img">
                    <img className="img-fluid" src={SpointImg} alt="" />
                  </div>
                  <div className="Spoint_title">
                    Menu
                    <br />
                    Design
                  </div>
                  <div className="SpointLine"></div>
                </div>
                <div className="Spoint" data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="350"
                  data-aos-delay="0">
                  <div className="Spoint_img">
                    <img className="img-fluid" src={SpointImg} alt="" />
                  </div>
                  <div className="Spoint_title">
                    Menu
                    <br />
                    Design
                  </div>
                  <div className="SpointLine"></div>
                </div>
                <div className="Spoint" data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="350"
                  data-aos-delay="0">
                  <div className="Spoint_img">
                    <img className="img-fluid" src={SpointImg} alt="" />
                  </div>
                  <div className="Spoint_title">
                    Menu
                    <br />
                    Design
                  </div>
                  <div className="SpointLine"></div>
                </div>
              </div>

              <div className="col-md-12 visionWrapper">
                <div className="vision">
                  <div className="servicesTitle" data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">MISSION</div>
                  <div className="visionContent" data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae dolorum dolore aut sapiente hic veniam!
                  </div>
                </div>

                <div className="vision" >
                  <div className="servicesTitle" data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500">VISION</div>
                  <div className="visionContent" data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="1000">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vel itaque ut suscipit vitae consequatur necessitatibus?
                  </div>
                </div>

                <div className="vision">
                  <div className="servicesTitle" data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="1000">CORE VALUES</div>
                  <div className="visionContent" data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="1500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    alias, corporis veniam perspiciatis minima enim!
                  </div>
                </div>
              </div>
            </div>

            <div className="row row_services_bottom">
              <div className="col-md-12 services_bottom_line p-0"></div>
              <div className="col-md-12 quoteboxWrapper text-center">
                <div className="quotebox">
                  <div className="quoteboxImg" data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="0">
                    <img className="img-fluid" src={Wording} alt="" />
                  </div>
                  <div className="quoteboxInnerWrapper">
                    <div className="quotebox_left"></div>
                    <div className="quotebox_right"></div>
                  </div>
                  <div className="quoteboxName" data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="0">Gene Creative</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
