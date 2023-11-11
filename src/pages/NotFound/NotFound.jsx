import { useEffect, useState } from "react";
import "./notfound.scss";
import { useNavigate } from "react-router-dom";
import {assets} from "../../assets"
const NotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, seconds * 1000);

    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(countdownInterval);
    };
  }, [navigate, seconds]);

  return (
    <div className="not_found">
      <div className="box404">

      <h1 id="text404">404</h1>
      {assets.cable}
      </div>
      <h3>
        Oops, it looks like the page you were trying to access doesn`t exist or
        has been moved.
      </h3>
      <p>Redirecting Home page in {seconds} seconds</p>
    </div>
  );
};

export default NotFound;
