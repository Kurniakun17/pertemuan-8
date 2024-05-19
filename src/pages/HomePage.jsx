import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:8000/blogs");
    const data = await response.json();

    setBlogs(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    console.log(result)

    if (response.ok) {
      fetchData();
    }
  };

  return (
    <div className="text-white min-h-screen bg-zinc-800 pt-28">
      <div className="w-[90%] max-w-[600px] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold mb-4">Android's Blogs</h1>
          <button
            className="text-zinc-900 bg-white px-4 py-2 rounded-md"
            onClick={() => navigate("/add_blog")}
          >
            Add Blog
          </button>
        </div>
        <div className="rounded-xl border border-gray-300 ">
          {/* Blog items */}
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-300 last:border-b-0"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <button
                  className="hover:cursor-pointer"
                  onClick={() => {
                    handleDelete(blog.id);
                  }}
                >
                  <Trash className=" hover:text-red-500 duration-200" />
                </button>
              </div>
              <p>{blog.content}</p>
              <p className="text-right italic mt-2">{blog.author}</p>
            </div>
          ))}

          {/* Empty state */}
          {blogs.length === 0 && (
            <div className="p-4 text-center">
              <p className="text-xl font-bold">No blog found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
