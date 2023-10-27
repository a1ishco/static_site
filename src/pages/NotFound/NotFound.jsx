import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        return prevDots === "..." ? "." : prevDots + ".";
      });
    }, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="not_found">
        <h1>Oops{dots}</h1>
        <p>You entered the wrong path.</p>
        <i>
          Please go <Link to={"/"}>Home page </Link>
        </i>
      </div>
    </>
  );
};

export default NotFound;
