import { useState, useEffect, useRef } from "react";
import { Input, Button, Flex, Card, message } from "antd";
import "./components.scss";
import { SafetyOutlined } from "@ant-design/icons";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const inputRefs = useRef([]);
  const phoneNumber = "+1234567890123";

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleResendClick = () => {
    if (timer === 0) {
      setTimer(120);
      setOtp(["", "", "", ""]);
      inputRefs.current[0].focus();
      message.success("Message sent successfully");
    } else {
      console.log("Send OTP Clicked", otp.join(""));
    }
  };

  return (
    <div className="otp_page">
      <Flex justify="center" align="center">
        <Card
          title={
            <>
              <SafetyOutlined style={{fontSize:70 , marginTop:10}}/>
              <h1>OTP Verification</h1>
              <p>Code has been sent to {maskPhoneNumber(phoneNumber)}</p>
            </>
          }
        >
          <p id="timer">
            {timer > 0
              ? `Time left: ${Math.floor(timer / 60)}:${timer % 60}`
              : "Time expired"}
          </p>
          <Flex justify="space-between">
            {otp.map((digit, index) => (
              <Input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength={1}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </Flex>
          <div className="otp_resend">
            <Button
              type="default"
              onClick={handleResendClick}
              className={timer > 0 ? "send" : "resend"}
            >
              {timer > 0 ? "Send OTP" : "Resend OTP"}
            </Button>
          </div>
        </Card>
      </Flex>
    </div>
  );
};
const maskPhoneNumber = (number) => {
  const visibleLength = 3;
  const maskedPart = "*".repeat(number.length - visibleLength * 2);
  return `${number.slice(0, visibleLength)}${maskedPart}${number.slice(
    -visibleLength
  )}`;
};
export default Otp;
