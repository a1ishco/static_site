import { Row, Col } from "antd";
import {
  InstagramFilled,
  GithubFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import Buttons from "../../components/Buttons";
import "./components.scss";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { assets } from "../../assets";
const SiderMain = () => {
  const navigate = useNavigate();
  return (
    <Row className="sider_row">
      <div className="about_me" data-aos="fade-left">
        <Col xs={24}>
          <Row>
            <Col xs={24} className="sider_about">
              <p className="sider_header">About me</p>
              <div className="about_text">
                <p>
                  I like to constantly develop and learn. New knowledge and
                  experiences are my main motivation. I am active, social,
                  hardworking and responsible. I can use these qualities to
                  contribute effectively to a dynamic team. I consistently meet
                  performance expectations while being dedicated and
                  hardworking.
                </p>
                <div className="buttons">
                  <Buttons
                    id="learn_more"
                    text="Learn More"
                    onClick={() => {
                      navigate("/about");
                    }}
                  />
                  <Link
                    to={assets.pdfCV}
                    download="Ali Bashirov CV"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Buttons id="download_cv" text="Download CV" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
      <div className="follow_contact_cv" data-aos="fade-left">
        <Col xs={24}>
          <Row>
            <Col xs={24} className="sider_contact">
              <p className="sider_header">Contact</p>
              <div className="contact-info">
                <p>Email: ali.bashirov02@gmail.com</p>
                <p>Phone: +994 50 771 80 99</p>
                <p>Address: Baku, G.Garayev ave 125</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Row>
            <Col xs={24} className="sider_follow">
              <p className="sider_header">Follow me</p>
              <div className="social-icons">
                <div className="socials">
                  <a
                    href="https://www.github.com/a1ishco"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubFilled id="github" />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/ali-bashirov-59bb7b165"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinFilled id="linkedin" />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.instagram.com/a1ishco"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramFilled id="instagram" />
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.facebook.com/your_username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookFilled id="facebook" fill="#000" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </Row>
  );
};

export default SiderMain;
