import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/posts");
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/create",
        {
          title,
          content,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        navigate("/posts");
      }
    } catch (err) {
      console.log("Error occurred:", err);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleCreate}>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="제목을 입력해주세요"
            className="title"
            required
          />
          <div style={{ width: "1900px", margin: "auto" }}>
            <hr />
          </div>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="content"
            placeholder="내용을 입력해주세요"
            rows="10"
            cols="90"
            required
          />
          <div className="buttonContainer">
            <button type="submit" className="postButton">
              등록
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="cancelButton"
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;