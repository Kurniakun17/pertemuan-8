import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      title,
      content,
      author,
    };

    const response = await fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div className="text-white min-h-screen bg-zinc-800 pt-28">
      <div className="w-[90%] max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Add Blog</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input
              className="rounded-lg py-2 px-4 text-black bg-white"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="content">Content</label>
            <input
              className="rounded-lg py-2 px-4 text-black bg-white"
              id="content"
              placeholder="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="author">Author</label>
            <input
              className="rounded-lg py-2 px-4 text-black bg-white"
              id="author"
              placeholder="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <button className="bg-white py-2 font-bold text-black rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
