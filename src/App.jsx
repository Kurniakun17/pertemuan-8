import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddBlogPage from "./pages/AddBlogPage";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blog 1",
      content: "This is the first blog",
      author: "Damar",
    },
    {
      title: "Blog 2",
      content: "This is the first blog",
      author: "Ikhsan",
    },
    {
      title: "Blog 3",
      content: "This is the first blog",
      author: "Syahrul",
    },
  ]);

  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add_blog" element={<AddBlogPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
