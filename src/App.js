import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Create from "./components/create";
import Posts from "./components/posts";
import Register from "./components/register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <div className="logo">
            <h1>Mini Edu Bridge</h1>
          </div>
          <hr className="divider" />
        </header>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;