import React from "react";

import { optionsForDropoff } from "../../data/data";

function ShopDropOption() {
  const renderCard = optionsForDropoff.map((card, index) => (
    <div className="col-lg" key={index}>
      <div className="card" style={{ backgroundColor: "red", color: "white" }}>
        <div className="card-body text-center">
          <i className={card.icon} style={{ fontSize: "32px" }}></i>
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    </div>
  ));

  return <div className="row mt-5">{renderCard}</div>;
}

export default ShopDropOption;
