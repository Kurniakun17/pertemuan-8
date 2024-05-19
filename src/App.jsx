import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddBlogPage from "./pages/AddBlogPage";

const App = () => {
  const [blogs, setBlogs] = useState([
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
