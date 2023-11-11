import { useState } from "react";
import "./components.scss";

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  const validateEmail = (inputEmail) => {
    if (inputEmail === "") {
      setIsValidEmail(true);
    } else {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
      setIsValidEmail(isValid);
      return isValid;
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      return;
    }

    setIsLoading(true);
    try {
      const loginData = { email, password };
      await new Promise((resolve) => setTimeout(resolve, 2000));
      localStorage.setItem("login", JSON.stringify(loginData));
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glassmorph_login">
      <div className={`body ${isForgotPassword ? "forgot-password" : ""}`}>
      <div className="wrapper">
        {isForgotPassword ? (
          <>
            <form action="#">
              <h2>Forgot Password</h2>
              <div className="input-field">
                <input type="text" required />
                <label>Enter your email</label>
              </div>
              <button type="submit">Send link to mail</button>
              <a onClick={handleForgotPasswordClick} className="back-button">
                Back to Login
              </a>
            </form>
          </>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <h2>Login</h2>
            <div className="input-field">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
                required
              />
              <label>Enter your email</label>
              {!isValidEmail && <p className="error-message">Invalid email</p>}
            </div>
            <div className="input-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Enter your password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <a href="#" onClick={handleForgotPasswordClick}>
                Forgot password?
              </a>
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging In..." : "Log In"}
            </button>
            <div className="register">
              <p>
                Don`t have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Login;
