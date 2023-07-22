// import React from "react";
import "./Services.css";
import Astronaut from "../../Image/banner-astronaut.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import Moon from "../../Image/profile_moon.png";
import Icon from "../../Image/services_icon1(2).png";
import Line from "../../Image/line_red(1).png";
import LineBlue from "../../Image/line_blue(1).png"
import IconBlue from "../../Image/icon2(2).png"
import Saturn from "../../Image/services_saturn.png"
import Jupiter from "../../Image/services_jupitar(1).png"
import Earth from "../../Image/Banner-Earth.png"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      once: false
    });
    AOS.refresh();
  }, []);
  return (
    <section id="services">
      <div className="container-fluid containerServices">
        <div className="row justtify-content-center">
          <div className="innerWrapper2">
            <div className="col-md 12 servicesBanner">
              <div className="meteor meteor1">
                <div className="meteor-1"></div>
                <div className="meteor-2"></div>
                <div className="meteor-3"></div>
                <div className="meteor-4"></div>
                <div className="meteor-5"></div>
                <div className="meteor-6"></div>
                <div className="meteor-7"></div>
                <div className="meteor-8"></div>
                <div className="meteor-9"></div>
                <div className="meteor-10"></div>
              </div>
              <div className="astronaut">
                <img className="img-fluid" src={Astronaut} alt="" />
              </div>

              <h2 data-aos="fade-down"
                data-aos-duration="500"
                data-aos-offset="200">Gene Creative</h2>
              <div className="servicesLine1" data-aos="fade-right"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-delay="500"></div>
              <h4 data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-delay="900">Creative | Branding | Graphic Design</h4>
            </div>
            <div className="col-md-12 sec1downButton text-center">
              <Link to="#why">
                <AiOutlineArrowDown />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container_services_bottom">
        <div className="row">
          <div className="innerWrapper2">
            <div className="col-md-12 serMoon">
              <div className="serMoonImg" data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200">
                <img className="img-fluid" src={Moon} alt="" />
              </div>
            </div>

            <div className="col-md-12 services-container"
                data-aos-delay="0"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-offset="200">
              <div className="services-container_img">
                <img className="img-fluid" src={Icon} alt="" />
              </div>
              <div className="services_line">
                <img className="img-fluid" src={Line} alt="" />
              </div>
              <div className="services_box">
                <h2>Branding & Identity Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, cumque totam. Veritatis a odio labore rem quidem
                  sint quaerat odit tenetur. Porro vel cupiditate reprehenderit!
                </p>

                <Link to="/Profile">
                  <button className="button-57 text-center" role="button">
                    <span className="text">See All Projects</span>
                    <span>See All Projects</span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-md-12 services-container2"  data-aos-delay="0"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-offset="200">
              <div className="services_box">
                <h2>Branding & Identity Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, cumque totam. Veritatis a odio labore rem quidem
                  sint quaerat odit tenetur. Porro vel cupiditate reprehenderit!
                </p>

                <Link to="/Profile">
                  <button className="button-57 text-center" role="button">
                    <span className="text">See All Projects</span>
                    <span>See All Projects</span>
                  </button>
                </Link>
              </div><div className="services_line">
                <img className="img-fluid" src={LineBlue} alt="" />
              </div>
              <div className="services-container_img">
                <img className="img-fluid" src={IconBlue} alt="" />
              </div>
              
            </div>
            <div className="col-md-12 saturnWrapper">
              <div className="saturn" data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200">
                <img className="img-fluid" src={Saturn} alt="" />
              </div>
            </div>

            <div className="col-md-12 services-container3"
             data-aos-delay="0"
             data-aos="fade-right"
             data-aos-duration="500"
             data-aos-offset="200">
              <div className="services-container_img">
                <img className="img-fluid" src={Icon} alt="" />
              </div>
              <div className="services_line">
                <img className="img-fluid" src={Line} alt="" />
              </div>
              <div className="services_box">
                <h2>Branding & Identity Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, cumque totam. Veritatis a odio labore rem quidem
                  sint quaerat odit tenetur. Porro vel cupiditate reprehenderit!
                </p>

                <Link to="/Profile">
                  <button className="button-57 text-center" role="button">
                    <span className="text">See All Projects</span>
                    <span>See All Projects</span>
                  </button>
                </Link>
              </div>
            </div>


            <div className="col-md-12 jupiterWrapper" >
              <div className="jupiter" data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200">
                <img className="img-fluid" src={Jupiter} alt="" />
              </div>
            </div>

            <div className="col-md-12 services-container4"  data-aos-delay="0"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-offset="200">
              <div className="services_box">
                <h2>Branding & Identity Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, cumque totam. Veritatis a odio labore rem quidem
                  sint quaerat odit tenetur. Porro vel cupiditate reprehenderit!
                </p>

                <Link to="/Profile">
                  <button className="button-57 text-center" role="button">
                    <span className="text">See All Projects</span>
                    <span>See All Projects</span>
                  </button>
                </Link>
              </div><div className="services_line">
                <img className="img-fluid" src={LineBlue} alt="" />
              </div>
              <div className="services-container_img">
                <img className="img-fluid" src={IconBlue} alt="" />
              </div>
              
            </div>

            <div className="col-md-12 earthWrapper" >
              <div className="earth1" data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200">
                <img className="img-fluid" src={Earth} alt="" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Services;
