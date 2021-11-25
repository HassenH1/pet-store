import React from "react";

import { blogs } from "../../data/data";

function Blog() {
  const renderBlogs = blogs.map((blog, index) => (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{blog.title}</h5>
          <p class="card-text">{blog.body}</p>
          <a href={blog.path} class="btn btn-primary" target="_blank">
            {blog.btnText}
          </a>
        </div>
      </div>
    </>
  ));

  return (
    <div className="row">
      <div className="col-lg">
        <p class="fs-4 mt-5 text-left text-muted">What's Happening</p>
        {renderBlogs}
      </div>
      <div className="col-lg">
        <p class="fs-4 mt-5 text-left text-muted">Recent Video</p>
        <iframe
          src="https://www.youtube.com/embed/n8tR2w0zLeQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          title="video"
          style={{ height: "85%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Blog;
