import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/posts");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setError("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="App">
      <h2>로그인</h2>
      <div>
        <form onSubmit={handleLogin}>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            style={{ marginTop: "20px" }}
            placeholder="아이디"
            className="inputIdPassword"
          />
          <br />
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{ marginTop: "10px" }}
            placeholder="비밀번호"
            className="inputIdPassword"
          />
          <br />
          <button type="submit" className="loginButton">
            로그인
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div>
        <span style={{ color: "#8D8D8D" }}>계정이 없으시다면?</span>
        <br />
        <a className="App-link" href="/register">
          회원가입하러가기
        </a>
      </div>
    </div>
  );
}

export default Login;