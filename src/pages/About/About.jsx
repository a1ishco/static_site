import { Col, Row } from "antd";
import "./about.scss";
import { assets } from "../../assets";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const dateCalculation = (date) => {
    const currentDate = new Date();
    const startDate = new Date(date);
    const diffTime = Math.abs(currentDate - startDate);
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffYears;
  };

  useEffect(() => {
    const aboutColumn = document.querySelector(".about-column");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 500) {
        aboutColumn.classList.add("blurred");
      } else {
        aboutColumn.classList.remove("blurred");
      }
    });
  }, []);

  return (
    <>
      <Row className="about_row">
        <Col xs={24} md={11} className="about-column blur-on-scroll">
          <Col xs={24} className="about_image">
            <img src={assets.aliJPG} />
          </Col>
        </Col>

        <Col xs={24} md={12} offset={1}>
          <div className="line"></div>
          <Row>
            <Col xs={24} className="about_me">
              <div data-aos="fade-left" className="aos_about">
                <p id="about_text_1">
                  <span id="name">Hello! I`m Ali Bashirov</span>, a passionate
                  front-end developer with a creative flair and a knack for
                  turning ideas into stunning, user-friendly websites. I believe
                  that great design and user experience are at the heart of
                  every successful digital project.
                </p>
              </div>
            </Col>

            <Col xs={24} className="about_skills">
              <div data-aos="fade-left" className="aos_about">
                <h1>Skills</h1>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    With a strong foundation in <b>HTML</b> and <b>CSS</b>, I
                    can craft the structural and visual elements that form the
                    backbone of web design. I pay meticulous attention to
                    detail, ensuring that every element is pixel-perfect.
                  </p>
                </div>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    <b>SASS</b>: Leveraging SASS, a CSS preprocessor, I
                    streamline and enhance the styling process. This allows for
                    cleaner, more organized code, making maintenance and updates
                    a breeze.
                  </p>
                </div>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    <b>Bootstrap</b>: I`m proficient in Bootstrap, which
                    accelerates the development process by providing a robust
                    grid system, pre-designed components, and responsive design
                    features. This ensures a consistent and user-friendly
                    experience across various devices.
                  </p>
                </div>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    <b>Ant Design</b>: I`m experienced in Ant Design, a popular
                    UI library for React. It enables me to create modern and
                    aesthetically pleasing user interfaces, complete with a
                    range of components and styles.
                  </p>
                </div>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    <b>JavaScript</b>: I have a strong command of JavaScript,
                    which is the driving force behind interactivity on the web.
                    Whether it`s enhancing user experiences or creating dynamic
                    functionality, I use JavaScript to breathe life into
                    websites.
                  </p>
                </div>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    <b>React</b>: My expertise extends to React, a powerful
                    JavaScript library for building user interfaces. I leverage
                    its component-based architecture to create highly modular
                    and maintainable code.
                  </p>
                </div>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    <b>Redux Toolkit</b>: To manage the state of complex
                    applications, I utilize Redux Toolkit. It ensures a
                    centralized and predictable state management system,
                    enhancing the performance and maintainability of web
                    applications.
                  </p>
                </div>
                <div data-aos="fade-left" className="aos_flex">
                  <p id="about_text_2">
                    <b>TypeScript</b>: I`m proficient in TypeScript, which adds
                    a layer of static typing to JavaScript, resulting in more
                    robust and bug-free code. It`s an invaluable tool for
                    maintaining large-scale projects.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={24} className="about-experience">
          <h1 className="experience_header">Experience</h1>
          <hr />
          <div className="exp_wrapper">
            <ul className="exp_timeline">
              <li>
                <details className="panel">
                  <summary>2023 - Qmeter LLC</summary>
                  <p>
                    Front-End Development experience - 3 month internship
                    program.
                    <br />
                    Front-End Development <b>work</b> experience -
                    {` ${dateCalculation("12.01.2023")} years`}
                    <br />
                    <br />{" "}
                    <Link
                      to="https://qmeter.net/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Qmatic , Qmeter projects
                    </Link>
                  </p>
                </details>
              </li>
              <li>
                <details className="panel">
                  <summary>2023 - AzEduNet</summary>
                  <p>
                    Help-Desk experience internship (Technical support) -
                    AZEDUNET
                  </p>
                </details>
              </li>
              <li>
                <details className="panel">
                  <summary>2022 - Bank Respublika</summary>
                  <p>
                    Front-End Development experience - `Neo-Summer School` -
                    Summer internship program (IT Lab).
                  </p>
                </details>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} md={24} className="about-experience">
          <h1 className="experience_header">Certificates</h1>
          <hr />
          <div className="exp_wrapper">
            <ul className="certificate_timeline">
              <li>
                <details className="panel">
                  <summary>2024 - IELTS (GENERAL TRAINING ) </summary>
                  <p>CEFR Level B2 - Overall 6.</p>
                  <img
                    style={{ objectFit: "contain", height: 400 }}
                    src={assets.ielts}
                  ></img>
                </details>
              </li>
              <li>
                <details className="panel">
                  <summary>2023 - ICPC Azerbaijan Qualification</summary>
                  <p>Azerbaijan Qualification III place</p>
                  <img src={assets.icpc}></img>
                </details>
              </li>
              <li>
                <details className="panel">
                  <summary>2022 - SAF STEAM</summary>
                  <p>Hackathon University II place</p>
                  <img src={assets.saf}></img>
                </details>
              </li>
              <li>
                <details className="panel">
                  <summary>2022 - Bank Respublika</summary>
                  <p>`Neo-Summer School` - Summer internship program.</p>
                  <img src={assets.bankR}></img>
                </details>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default About;
