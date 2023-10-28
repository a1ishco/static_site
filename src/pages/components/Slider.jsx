import { useState, useEffect } from "react";
import { assets } from "../../assets";
import "./components.scss";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPortfolios = 3;
  const intervalDuration = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalPortfolios);
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const portfolios = [
    { id: "p1", rotation: 0 , url:"https://weather-appreacted.netlify.app/"},
    { id: "p2", rotation: 120 , url:"http://www.google.com"},
    { id: "p3", rotation: 240 , url:"http://www.google.com"},
  ];

  return (
    <>
      <Row className="container-slider">
        <Col xs={24}>
          <div className="slider-content">
            {portfolios.map((portfolio, index) => (
              <div
                className={`portfolio ${
                  currentIndex === index ? "active" : "passive"
                }`}
                id={portfolio.id}
                key={portfolio.id}
                style={{
                  transform: `rotateY(${
                    portfolio.rotation - currentIndex * 120
                  }deg) translateZ(200px)`,
                }}
              >
                <Link to={portfolio.url} target="_blank">
                  <img
                  src={assets.p1}
                  alt={`${index + 1}`}
                  className="portfolio-image"
                />
                </Link>
                
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Slider;
