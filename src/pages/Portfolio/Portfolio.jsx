import { Button, Card, Col, Row } from "antd";
import "./portfolio.scss";
import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { Skeleton } from 'antd';

const Portfolio = () => {
  return (
    <>
      <Row>
        <Col xs={24} md={12} className="portfolio_col1">
          <div className="header_col">
            <h3>Projects</h3>
          </div>
          <div className="projects">
            
            <Card className="card" title="Weather App (Mini project)"
             extra={
              <Link to="https://weather-appreacted.netlify.app/" target="_blank">
                <Button>Live demo</Button>
              </Link>
            }>
              <img src={assets.weather_app} />
            </Card>
            <Card className="card" title="Child Entertaiment CRM App (Mini project)"
             extra={
                <Link to="project/crm" target="_blank">
                <Button>Live demo</Button>
              </Link>
            }>
              <img src={assets.crm_2} />
            </Card>
           <Skeleton/>
          </div>
        </Col>
        <Col xs={24} md={12} className="portfolio_col2">
          <div className="header_col">
            <h3>Components</h3>
          </div>
          <div className="components">
            <Card
              className="card"
              title="Login page"
              extra={
                <Link to="component/login" target="_blank">
                  <Button>Live demo</Button>
                </Link>
              }
            >
              <img src={assets.glassmorph_login} />
            </Card>
            <Card
              className="card"
              title="Contact form"
              extra={
                <Link to="component/contact" target="_blank">
                  <Button>Live demo</Button>
                </Link>
              }
            >
              <img src={assets.moda_contact} />
            </Card>
            <Card
              className="card"
              title="Credit card and OTP code authentification"
              extra={
                <Link to="component/otp" target="_blank">
                  <Button>Live demo</Button>
                </Link>
              }
            >
              <img src={assets.otp} />
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Portfolio;
