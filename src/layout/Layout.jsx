import { Layout, Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreAddOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "./layout.scss";
import Logo from "./components/Logo/Logo";
import { Link, useLocation } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import { useEffect } from "react";
import AOS from"aos";
import "aos/dist/aos.css";
const { Header, Content } = Layout;

const Layouts = () => {
  const menuItems = [
    { key: "1", icon: <HomeOutlined />, label: "Home", link: "/" },
    { key: "2", icon: <InfoCircleOutlined />, label: "About", link: "/about" },
    {
      key: "3",
      icon: <AppstoreAddOutlined />,
      label: "Portfolio",
      link: "/portfolio",
    },
    {
      key: "4",
      icon: <ContactsOutlined />,
      label: "Contact",
      link: "/contact",
    },
  ];

  const location = useLocation();
  const selectedKey = menuItems.find((item) => item.link === location.pathname)?.key || "1";
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Layout className="layout">
        <Header className="header">
          <Row>
            <Col xs={12}>
              <Logo />
            </Col>
            <Col xs={12}>
              <Row className="header_row">
                <Col xs={24}>
                  <Menu
                    mode="horizontal"
                    className="layout_menu"
                    selectedKeys={[selectedKey]}
                  >
                    {menuItems.map((item) => (
                      <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.link}>{item.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Layout hasSider className="content_layout">
          <Content className="content">
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Layouts;
