import  { useState, useRef } from 'react';

const OTPForm = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const refs = useRef([]);
  const [buttonState, setButtonState] = useState("Verify Account");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setButtonState("Verify Account");
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value !== "" && index < 4) {
      refs.current[index + 1].focus();
    }
  };

  const handleBackspace = (element, index) => {
    if (element.value === "" && index > 0) {
      refs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue === "1234") { // Replace with your actual OTP validation logic
      // alert("OTP Verified Successfully!");
      setButtonState("Verified");
    } else {
      // alert("Incorrect OTP");
      setButtonState("Verification failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 relative">
      <h1 className="text-5xl font-bold text-white mb-6">Chai aur Code</h1>
      <form className="bg-white p-8 rounded shadow-md flex flex-col mx-auto items-center justify-center" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-2">Mobile Phone Verification</h2>
        <p className="text-gray-500 mb-4 text-center">Enter the 4-digit verification code that was sent to <br /> your phone number.</p>
        <div className="flex space-x-2 mb-4">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className={`w-12 h-12 text-center text-xl border rounded bg-slate-200 ${buttonState === "Verified" ? "border-emerald-400" : buttonState === "Verification failed"? "border-rose-500" : ""}`}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyUp={(e) => handleBackspace(e.target, index)}
              ref={(el) => (refs.current[index] = el)}
            />
          ))}
        </div>
        <button type="submit" className={`w-full  text-white py-2 rounded ${buttonState === "Verified" ? "bg-emerald-400" : buttonState === "Verification failed"? "bg-rose-500" : "bg-sky-950"}`} disabled={buttonState !== "Verify Account"}>{buttonState}</button>
        <p className="text-gray-500 mt-2">
          Didn&apos;t receive code? <span className="text-sky-950 cursor-pointer">Resend</span>
        </p>
      </form>
      <a href="https://chaicode.com" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4">
        <img src="/chaiaurcode.png" alt="Chai Code" className="w-20 h-20 rounded-lg" />
      </a>
    </div>
  );
};

export default OTPForm;
