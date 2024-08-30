import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/logout",
        {},
        { withCredentials: true }
      );
      // 로그아웃 성공 후 로그인 페이지로 리디렉션
      navigate("/");
    } catch (error) {
      console.log(error);
      setMessage("로그아웃 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts", {
          withCredentials: true,
        });
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        setMessage("게시물 조회 중 오류가 발생했습니다.");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        <button className="logoutButton" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
      <div className="posts-container">
        <h2>게시물 목록</h2>
        <div className="buttonClass">
          <button className="createButton" onClick={handleCreate}>
            게시글 작성하기
          </button>
        </div>
        {message && <p className="message">{message}</p>}
        <ul className="posts-list">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post._id} className="post-item">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-content">{post.content}</p>
              </li>
            ))
          ) : (
            <p className="no-posts">게시물이 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Posts;