import React from "react";

import { blogs } from "../../data/data";

function Blog() {
  const renderBlogs = blogs.map((blog, index) => (
    <>
      <div className="card" key={index}>
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.body}</p>
          <a href={blog.path} className="btn btn-primary" target="_blank">
            {blog.btnText}
          </a>
        </div>
      </div>
    </>
  ));

  return (
    <div className="row">
      <div className="col-lg">
        <p className="fs-4 mt-5 text-left text-muted">What's Happening</p>
        {renderBlogs}
      </div>
      <div className="col-lg">
        <p className="fs-4 mt-5 text-left text-muted">Recent Video</p>
        <iframe
          src="https://www.youtube.com/embed/n8tR2w0zLeQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="video"
          style={{ height: "85%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Blog;
