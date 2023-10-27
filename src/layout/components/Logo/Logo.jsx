import { Link } from "react-router-dom";
import "./logo.scss";
const Logo = () => {
  return (
    <>
    <Link to={"/"}>
      <div className="logo_icon">
      <div className="icon icon1"></div>
      <div className="name">a1ishco </div> / 
      <div className="icon icon2"></div>
    </div>
    </Link>
    </>
  );
};

export default Logo;
