import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/T-0EW-SEbsE/1920x1000"
            className="d-block w-100"
            alt="1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/UtrE5DcgEyg/1920x1000"
            className="d-block w-100"
            alt="2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/U3aF7hgUSrk/1920x1000"
            className="d-block w-100"
            alt="3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
