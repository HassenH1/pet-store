import React from "react";

import { blogs } from "../../data/data";

function Blog() {
  const renderBlogs = blogs.map((blog, index) => (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{blog.title}</h5>
          <p class="card-text">{blog.body}</p>
          <a href="#" class="btn btn-primary">
            {blog.btnText}
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{blog.title}</h5>
          <p class="card-text">{blog.body}</p>
          <a href="#" class="btn btn-primary">
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
        {/* {renderBlogs} */}
        {/* <div className="row">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="col-lg">
        <p class="fs-5 my-5 text-left">Recent Video</p>
        Put video here
      </div>
    </div>
  );
}

export default Blog;
