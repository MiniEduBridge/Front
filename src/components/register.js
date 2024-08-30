import React, { useState } from "react";
import axios from "axios";
import "./register.css"; // Import the CSS

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage(
        error.response?.data?.error || "회원가입 중 오류가 발생했습니다."
      );
    }
  };

  return (
    <div className="register-container">
      <h2>회원가입</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label htmlFor="username">사용자 이름</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          회원가입
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;