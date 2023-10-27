import { Button, Col, Form, Input, Row, Select, message } from "antd";
import "./contact.scss";
import {
  InstagramFilled,
  GithubFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { validateForm } from "../../helper/checker/validation";
import emailjs from "emailjs-com";
import emailjsConfig from "../../helper/smtp/emailjsConfig";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "antd/es/form/Form";

const Contact = () => {
  const [form]=useForm();
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const onFinish = (values) => {
    const errors = validateForm(values);

    if (Object.keys(errors).length === 0) {
      sendEmail(values);
    } else {
      console.log("Error onFinish");
    }
  };

  const sendEmail = (formData) => {
    emailjs
      .send(
        emailjsConfig.serviceID,
        "template_8gfzu1p",
        formData,
        emailjsConfig.userID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          message.success("Your message sent successfully");
          form.resetFields();

        },
        (error) => {
          console.error("Email sending failed:", error);
          message.error("Failed to send the message");
        }
      );
  };

  useEffect(() => {
    axios
      .get(
        "https://apinew.testqmeter.net/api/v1/template/new-country-list/?format=json"
      )
      .then((response) => {
        setCountryList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country list:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Row className="contact_row">
        <Col xs={24} className="contact_header">
          <div className="line"></div>
          <h1>Get in touch with me</h1>
        </Col>
        <Col xs={24} md={10} className="contact_left">
          <p>You can contact me from social media and form</p>
          <div className="social-icons">
            <div className="social">
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
        <Col xs={24} md={14} className="contact-form_col">
          <div className="contact-form">
            <Form onFinish={onFinish} form={form}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name",
                  },
                ]}
              >
                <Input placeholder="Enter full name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                  {
                    type: "email",
                    message: "Invalid email address",
                  },
                ]}
              >
                <Input placeholder="Your email address" />
              </Form.Item>
              <div className="number">
                <Form.Item
                  className="country_codes"
                  name="countryCode"
                  rules={[
                    {
                      required: true,
                      message: "Please select a country code",
                    },
                  ]}
                >
                  <Select
                    placeholder="Country Code"
                    style={{ width: "100%" }}
                    loading={loading}
                  >
                    {countryList.map((country) => (
                      <Select.Option
                        key={country.code}
                        value={country.dial_code}
                      >
                        {`${country.dial_code} (${country.name})`}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  className="phone_number_form"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                    {
                      min: 9,
                      max: 11,
                      message:
                        "Phone number should be between 9 and 11 characters",
                    },
                  ]}
                >
                  <Input placeholder="Your phone number" type="tel" />
                </Form.Item>
              </div>
              <Form.Item
                name="subject"
                rules={[
                  {
                    required: true,
                    message: "Please enter the subject",
                  },
                ]}
              >
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please write a message",
                  },
                ]}
              >
                <TextArea placeholder="Write me a message" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Send</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
