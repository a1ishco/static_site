import { Carousel, Button, Tooltip } from "antd";
import { assets } from "../../../assets";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Crm = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
    console.clear();
  };

  return (
    <div className="kid_crm">
      <Tooltip
        overlayStyle={{ maxWidth: "80%", marginTop: 200 }}
        arrow={{ pointAtCenter: true }}
        arrowAlign={{ top: 0 }}
        placement="left"
        title={
          <>
            <p>
              The project is a CRM system for a children`s entertainment center.
              Contains the work of performing CRUD commands.
            </p>
            <p>
              The first image shows the Login Page for the authentication
              process on the authentication page.
            </p>
            <p>
              The second picture shows the page for the table with the
              information of children and clients. Processes such as adding
              customers or children, updating data, deleting data, deleting
              customers from the database are carried out. In addition,
              operations such as payment processes are carried out.
            </p>
            <p>
              The third picture shows a form for adding customer or child
              information.
            </p>
            <p>
              In the fourth image, a message is displayed for information that
              must be filled.
            </p>
            <p>
              The payment modal is shown in the fifth picture. Here, a separate
              calculation is made for each child and general or individual
              scores are shown.
            </p>
          </>
        }
      >
        <Button
          className="tooltip_btn"
        >
          <QuestionCircleOutlined
            style={{ position: "absolute", margin: "-10px" }}
          />
        </Button>
      </Tooltip>
      <Carousel afterChange={onChange} dotPosition="top">
        <div>
          <img src={assets.crm_1} style={{ maxWidth: "100%" }} alt="CRM 1" />
        </div>
        <div>
          <img src={assets.crm_2} style={{ maxWidth: "100%" }} alt="CRM 2" />
        </div>
        <div>
          <img src={assets.crm_3} style={{ maxWidth: "100%" }} alt="CRM 3" />
        </div>
        <div>
          <img src={assets.crm_4} style={{ maxWidth: "100%" }} alt="CRM 4" />
        </div>
        <div>
          <img src={assets.crm_5} style={{ maxWidth: "100%" }} alt="CRM 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default Crm;
