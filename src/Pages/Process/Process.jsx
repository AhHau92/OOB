// import React from "react";
import "./Process.css";
import ProcessIcon1 from "../../Image/process_title_icon.png";
import Star from "../../Image/starlight01.png";
import Jupiter from "../../Image/process_planet1.png";
import Moon from "../../Image/process_planet3.png";
import Saturn from "../../Image/process_planet2.png";
import Neptune from "../../Image/process_planet4.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <section id="process">
      <div className="container-fluid container_process">
        <div className="row row_process">
          <div className="col-md-12 topWrapper">
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
            <div className="processBigTitle text-center">
              <h2
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                OUR APPROACH TO EVERY DESIGN
              </h2>
            </div>
            <div
              className="sec1Line"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-delay="500"
            ></div>
            <div
              className="processSmallTitle text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="200"
              data-aos-delay="900"
            >
              6 Steps To Making Great Designs and Clients Happy
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container_process2">
        <div className="row row_process2">
          <div className="col-md-12">
            <div className="processTitleWrapper text-center">
              <div
                className="processTitleImg"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img src={ProcessIcon1} alt="" />
              </div>
              <div
                className="sec2Title text-center"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
              >
                OUR APPROACH
                <span>TO EVERY DESIGN</span>
              </div>
            </div>

            <div className="process1">
              <div
                className="star"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img src={Star} alt="" />
              </div>
              <div className="process_content">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="700"
                >
                  MEET
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="900"
                >
                  Start with an understanding. First, we meet and learn about
                  your business, your purpose in creating visual content to help
                  us understand your business. It is extremely helpful when you
                  can provide our team with a strong example of designs you like
                  and what you are aiming for.
                </p>
              </div>
            </div>

            <div className="process2">
              <div
                className="star"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img alt="" src={Star} />
              </div>
              <div className="process_content">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="700"
                >
                  RESEARCH
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="900"
                >
                  Once we have gotten all the information, we also more to learn
                  about the industry. This way we can provide you the best, most
                  unique design solution possible.
                </p>
              </div>
            </div>

            <div className="process3">
              <div
                className="star"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img alt="" src={Star} />
              </div>
              <div className="process_content">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="700"
                >
                  CONCEPTS
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="900"
                >
                  Our graphic designers create different concepts, choosing the
                  ones that suit your needs the most.
                </p>
              </div>
            </div>
            <div className="process4">
              <div
                className="star"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img alt="" src={Star} />
              </div>
              <div className="process_content">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="700"
                >
                  PRESENT
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="900"
                >
                  We present these concepts to you, explain the rationale behind
                  each concept and why they would be successful. Make revisions
                  based on your feedback when necessary.
                </p>
              </div>
            </div>

            <div className="process5">
              <div
                className="star"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img alt="" src={Star} />
              </div>
              <div className="process_content">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="700"
                >
                  REVISE
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="900"
                >
                  Keeping the project goals in mind, we develop the concept into
                  a full-fledged set of designs. We follow up with you and may
                  go through a second round of revisions to finalize it.
                </p>
              </div>
            </div>
            <div className="process6">
              <div
                className="star"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img alt="" src={Star} />
              </div>
              <div className="process_content">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="700"
                >
                  DELIVER
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="900"
                >
                  Once everything is approved, we send all the files to you in
                  various formats (each suited for specific platforms.)
                </p>
              </div>
            </div>
            <div className="process7">
              <div
                className="star"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img alt="" src={Star} />
              </div>
              <div className="process_content">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="700"
                >
                  LAUNCH
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                  data-aos-delay="900"
                >
                  Now you roll out your new marketing campaign with amazing
                  designs to really turn heads.
                </p>
              </div>
            </div>

            <div
              className="jupiter"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
            >
              <img alt="" src={Jupiter} />
            </div>

            <div
              className="moon"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
            >
              <img alt="" src={Moon} />
            </div>
            <div
              className="saturn"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
            >
              <img alt="" src={Saturn} />
            </div>
            <div
              className="neptune"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
            >
              <img alt="" src={Neptune} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container_process2 container_process2_moblie">
        <div className="row row_process2_moblie">
          <div
            className="moon"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-offset="200"
          >
            <img alt="" src={Moon} />
          </div>
          <div className="col-md-12">
            <div className="processTitleWrapper text-center">
              <div
                className="processTitleImg"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                <img src={ProcessIcon1} alt="" />
              </div>
              <div
                className="sec2Title text-center"
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-offset="200"
              >
                OUR APPROACH
                <span>TO EVERY DESIGN</span>
              </div>
            </div>
          </div>
          <div
            className="jupiter"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-offset="200"
          >
            <img alt="" src={Jupiter} />
          </div>

          <div className="process-container">
            <div className="process-container_left"></div>
            <div className="process-container_right">
              <div className="process1">
                <div
                  className="star"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                >
                  <img src={Star} alt="" />
                </div>
                <div className="process_content">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="700"
                  >
                    MEET
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="900"
                  >
                    Start with an understanding. First, we meet and learn about
                    your business, your purpose in creating visual content to
                    help us understand your business. It is extremely helpful
                    when you can provide our team with a strong example of
                    designs you like and what you are aiming for.
                  </p>
                </div>
              </div>
              <div className="process2">
                <div
                  className="star"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                >
                  <img alt="" src={Star} />
                </div>
                <div className="process_content">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="700"
                  >
                    RESEARCH
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="900"
                  >
                    Once we have gotten all the information, we also more to
                    learn about the industry. This way we can provide you the
                    best, most unique design solution possible.
                  </p>
                </div>
              </div>

              <div className="process3">
                <div
                  className="star"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                >
                  <img alt="" src={Star} />
                </div>
                <div className="process_content">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="700"
                  >
                    CONCEPTS
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="900"
                  >
                    Our graphic designers create different concepts, choosing
                    the ones that suit your needs the most.
                  </p>
                </div>
              </div>
              <div className="process4">
                <div
                  className="star"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                >
                  <img alt="" src={Star} />
                </div>
                <div className="process_content">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="700"
                  >
                    PRESENT
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="900"
                  >
                    We present these concepts to you, explain the rationale
                    behind each concept and why they would be successful. Make
                    revisions based on your feedback when necessary.
                  </p>
                </div>
              </div>

              <div className="process5">
                <div
                  className="star"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                >
                  <img alt="" src={Star} />
                </div>
                <div className="process_content">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="700"
                  >
                    REVISE
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="900"
                  >
                    Keeping the project goals in mind, we develop the concept
                    into a full-fledged set of designs. We follow up with you
                    and may go through a second round of revisions to finalize
                    it.
                  </p>
                </div>
              </div>
              <div className="process6">
                <div
                  className="star"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                >
                  <img alt="" src={Star} />
                </div>
                <div className="process_content">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="700"
                  >
                    DELIVER
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="900"
                  >
                    Once everything is approved, we send all the files to you in
                    various formats (each suited for specific platforms.)
                  </p>
                </div>
              </div>
              <div className="process7">
                <div
                  className="star"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-offset="200"
                >
                  <img alt="" src={Star} />
                </div>
                <div className="process_content">
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="700"
                  >
                    LAUNCH
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                    data-aos-delay="900"
                  >
                    Now you roll out your new marketing campaign with amazing
                    designs to really turn heads.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="saturn"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
            >
              <img alt="" src={Saturn} />
            </div>
            <div
              className="neptune"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="200"
            >
              <img alt="" src={Neptune} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
