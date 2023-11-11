import { Form, Input, Button, Row, Col, Flex } from "antd";
import { assets } from "../../../assets";
import "./components.scss";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="moda_contact">
      <div className="body">
        <Row className="moda_row">
          <Col xs={0} md={10} className="moda_col_1">
            <img src={assets.moda} />
          </Col>
          <Col xs={24} md={14} className="moda_col_2">
            <Row id="moda_col_2_row">
              <Col md={15} xs={24}>
                <Form
                  name="contact-form"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                >
                  <Form.Item
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name!",
                      },
                    ]}
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email!" },
                      {
                        type: "email",
                        message: "Please enter a valid email address!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    rules={[
                      { required: true, message: "Please enter the subject!" },
                    ]}
                  >
                    <Input placeholder="Subject" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message!" },
                    ]}
                  >
                    <Input.TextArea placeholder="Message" rows={1} />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submit_button"
                    >
                      Contact us
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col md={9} xs={24} className="contact_col_2_right">
                <Row>
                  <Col md={24} xs={24}>
                    <h3>Contact</h3>
                    <p>moda@moda.com</p>
                  </Col>
                  <Col md={24} xs={24}>
                    <h3>Based in</h3>
                    <p>Los Angeles, USA</p>
                  </Col>
                  <Col md={24} xs={24}>
                    <Flex justify="space-around" className="contact_icons">
                      <FacebookOutlined />
                      <InstagramOutlined />
                      <TwitterOutlined />
                    </Flex>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
