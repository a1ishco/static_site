import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import SiderMain from "../components/SiderMain";
import "./mainpage.scss";

const MainPage = () => {
  const text = ["<h1>Front-end developer</h1>", "<p>Web developer</p>"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");


  useEffect(() => {
   

    const interval = setInterval(() => {
      if (displayText.length < text[index].length) {
        setDisplayText(text[index].slice(0, displayText.length + 1));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
          setDisplayText("");
        }, 1000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [displayText]);



  return (
    <Row className="main_page">
      <Col xs={24} md={15} lg={15} className="main_left">
        <Row className="main_left_row">
          <Col xs={24}>
            <div className="line"></div>
            <div className="main_text">
              <h1 id="name">Ali Bashirov</h1>
              <div data-aos="fade-up" className="aos_text">
                <pre>
                  <code id="specification">
                    {displayText}
                  </code>
                </pre>
              </div>
            </div>
          </Col>
          <Col xs={24}>

          </Col>
        </Row>
      </Col>
      <Col xs={24} md={9} lg={9} className="sider">
        <div className="sider_div" data-aos="fade-left">
          <SiderMain />
        </div>
      </Col>
    </Row>
  );
};

export default MainPage;
