import { Carousel, Row, Col, Button, Tooltip } from "antd";
import { assets } from "../../../assets";
import { QuestionCircleOutlined } from "@ant-design/icons";

const contentStyle = {
  margin: 0,
  height: "100%",
  color: "blue",
  textAlign: "center",
  marginTop: 30,
};

const Crm = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="carouser_crm" style={{ marginTop: 30 }}>
      <Row>
        <Col xs={3} offset={21}>
          <Tooltip  placement="left" title="The project is a CRM system for a children's entertainment center. Contains the work of performing CRUD commands. The first image shows the Login Page for the authentication process on the authentication page. The second picture shows the page for the table with the information of children and clients. Processes such as adding customers or children, updating data, deleting data, deleting customers from the database are carried out. In addition, operations such as payment processes are carried out. The third picture shows a form for adding customer or child information. In the fourth image, a message is displayed for information that must be filled. The payment mode is shown in the fifth picture. Here, a separate calculation is made for each child and general or individual scores are shown.">
            <Button
              style={{
                borderRadius: "50%",
                width: 10,
                height: 10,
                padding: 15,
                fontSize: 20,
                position: "relative",
              }}
            >
              <QuestionCircleOutlined style={{ position: "absolute", margin: "-10px" }} />
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Carousel afterChange={onChange} dotPosition="top">
        <div>
          <h3 style={contentStyle}>
            <img src={assets.crm_1} style={{ maxWidth: "100%" }} alt="CRM 1" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={assets.crm_2} style={{ maxWidth: "100%" }} alt="CRM 2" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={assets.crm_3} style={{ maxWidth: "100%" }} alt="CRM 3" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={assets.crm_4} style={{ maxWidth: "100%" }} alt="CRM 4" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={assets.crm_5} style={{ maxWidth: "100%" }} alt="CRM 5" />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Crm;
