import "./Home.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import Saturn from "../../Image/sec3-Saturn.png";
import Sec4Icon1 from "../../Image/sec4-icon1.png";
import Sec4Icon2 from "../../Image/sec4-icon2.png";
import Sec4Icon3 from "../../Image/sec4-icon3.png";
import Portpic1 from "../../Image/718.485.jpeg";
import Portpic2 from "../../Image/324.302.jpeg";
import Portpic3 from "../../Image/322.487.jpeg";
import Portpic4 from "../../Image/240.307.jpeg";
import Portpic5 from "../../Image/322.306.jpeg";
import Portpic6 from "../../Image/560.310.jpeg";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  useEffect(() => {
    AOS.init({
      once: false
    });
    AOS.refresh();
  }, []);
  return (
    <section id="home">
      <div className="container-fluid container_home">
        <div className="row row_home">
          <div className="innerWrapper2">
            {/* sec1 */}
            <div className="col-md-12 sec1">
              <div className="sec1Title" data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-offset="200">
                Gene Creative - The Design &
                <span> Devopment Solution Provider</span>
              </div>
              <div className="sec1Line" data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500"></div>
              <div className="sec1SmallTitle" data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="900">
                Branding Design | Logo Design | Graphic Design In Malaysia.
              </div>
              <Link to="/Profile" data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="1300">
                <button className="button-57" role="button">
                  <span className="text">Explore More</span>
                  <span>Explore More</span>
                </button>
              </Link>
            </div>

            {/* sec1 end */}

            {/* sec1 button go sec2 */}

            <div className="col-md-12 sec1downButton text-center">
              <Link to="#why">
                <AiOutlineArrowDown />
              </Link>
            </div>

            {/* sec1 button go sec2 end  */}

            {/* sec2 */}

            <div className="col-md-12 sec2" id="sec2">
              <div className="sec2Left">
                <div className="sec2Title" data-aos="fade-right"  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                  6 KIND OF BUSINESSMEN
                  <span data-aos="fade-right"  data-aos-duration="500"
                  data-aos-offset="190"
                  data-aos-delay="0">NEED ADVERTISING DESIGN</span>
                </div>
                <Link to="/Profile" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="500">
                  <button className="button-57" role="button">
                    <span className="text">Learn More</span>
                    <span>Learn More</span>
                  </button>
                </Link>
              </div>
              <div className="sec2Right">
                <div className="sec2Point" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="900">Register Logo Trademark</div>
                <div className="sec2Point" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="150"
                  data-aos-delay="1200">Register Logo Trademark</div>
                <div className="sec2Point" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="1500">Register Logo Trademark</div>
                <div className="sec2Point" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="1800">Register Logo Trademark</div>
                <div className="sec2Point" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="150"
                  data-aos-delay="2100">Register Logo Trademark</div>
                <div className="sec2Point" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="100"
                  data-aos-delay="2400">Register Logo Trademark</div>
              </div>
            </div>

            {/* sec2 end */}

            {/* sec3 */}

            <div className="col-md-12 why" id="why">
              <div className="why_left">
                <div className="why_left_img" data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                  <img className="img-fluid" src={Saturn} alt="" />
                </div>
                <div className="meteor">
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
              </div>
              <div className="why_right">
                <div className="sec2Title" data-aos="fade-up">
                  WHY
                  <span>50+ Companies</span>
                  <span>Choose Our Services</span>
                </div>
                <div className="sec1Line" data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-offset="150"
                  data-aos-delay="900"></div>
                <div className="why_right_wrapper">
                  <div className="why_right_inner_wrapper" >
                    <div className="why_title" >Great Support</div>
                    <div className="hr1"></div>
                    <p>
                      You can communicate easily with us. Give us a call to
                      support and solve your design problem.
                    </p>
                  </div>
                  <div className="why_right_inner_wrapper">
                    <div className="why_title">Great Support</div>
                    <div className="hr1"></div>
                    <p>
                      You can communicate easily with us. Give us a call to
                      support and solve your design problem.
                    </p>
                  </div>
                  <div className="why_right_inner_wrapper">
                    <div className="why_title">Great Support</div>
                    <div className="hr1"></div>
                    <p>
                      You can communicate easily with us. Give us a call to
                      support and solve your design problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* sec3 end */}

            {/* sec4 */}
            <div className="container-fluid container_sec4">
              <div className="row row_sec4">
                <div className="innerWrapper2">
                  <div className="col-md-12">
                    <div className="text-center sec2Title" data-aos="fade-down" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                      BENEFITS OF CREATING
                    </div>
                    <div className="text-center sec4TitleWrapper" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="180"
                  data-aos-delay="500">
                      <div className="sec4Title" >A STRONG BRAND IDENTITY</div>
                    </div>
                  </div>

                  <div className="col-md-12 sec4Wrapper" data-aos="zoom-in" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                    <div className="sec4Point">
                      <div className="sec4Point_img">
                        <img className="img-fluid" src={Sec4Icon1} alt="" />
                      </div>

                      <div className="sec4_line"></div>
                      <div className="sec4smallTitle">
                        Build Trust And
                        <span>Familiarity</span>
                      </div>
                    </div>

                    <div className="sec4Point">
                      <div className="sec4Point_img">
                        <img className="img-fluid" src={Sec4Icon2} alt="" />
                      </div>

                      <div className="sec4_line"></div>
                      <div className="sec4smallTitle">
                        Build Trust And
                        <span>Familiarity</span>
                      </div>
                    </div>

                    <div className="sec4Point">
                      <div className="sec4Point_img">
                        <img className="img-fluid" src={Sec4Icon3} alt="" />
                      </div>

                      <div className="sec4_line"></div>
                      <div className="sec4smallTitle">
                        Build Trust And
                        <span>Familiarity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* sec4 end */}

            {/* sec5 */}
            <div className="container-fluid container_sec5">
              <div className="row row_sec5">
                <div className="col-md-12 sec5Title text-center">PORTFOLIO</div>

                <div className="col-md-12 sec5Wrapper">
                  <div className="sec5Innerwrapper">
                    <div className="a" data-aos="fade-right" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                      <img className="img-fluid" src={Portpic1} alt="" />
                    </div>
                    <div className="b" data-aos="fade-right" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500">
                      <img className="img-fluid" src={Portpic2} alt="" />
                    </div>
                    <div className="c"  data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500">
                      <img className="img-fluid" src={Portpic3} alt="" />
                    </div>
                    <div className="d"  data-aos="fade-right" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500">
                      <img className="img-fluid" src={Portpic4} alt="" />
                    </div>
                    <div className="e" data-aos="fade-right" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                      <img className="img-fluid" src={Portpic5} alt="" />
                    </div>
                    <div className="f" data-aos="fade-right" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="0">
                      <img className="img-fluid" src={Portpic6} alt="" />
                    </div>
                    <div className="g" data-aos="fade-up" data-aos-duration="500"
                  data-aos-offset="200"
                  data-aos-delay="500">
                      <Link to="/Profile">
                        <button className="button-57" role="button">
                          <span className="text">Learn More</span>
                          <span>Learn More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sec5 end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
