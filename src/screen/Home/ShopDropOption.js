import React from "react";

function ShopDropOption() {
  const options = [
    {
      text: "Curbside & In-Store Pickup",
      icon: "fa fa-car",
    },
    {
      text: "FREE Same-Day Delivery",
      icon: "fa fa-truck",
      // icon: "fa fa-shipping",
    },
  ];

  const renderCard = options.map((card, index) => (
    <div className="col-lg" key={index}>
      <div className="card" style={{ backgroundColor: "red", color: "white" }}>
        <div className="card-body text-center">
          <i class={card.icon} style={{ fontSize: "32px" }}></i>
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row mt-5">
      {renderCard}
      {/* <div className="col-lg">
        <div
          className="card"
          style={{ width: "18rem", backgroundColor: "red", color: "white" }}
        >
          <div className="card-body text-center">
            <i class="fa fa-car" style={{ fontSize: "32px" }}></i>
            <p className="card-text">Curside {"&"} In-Store Pickup</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ShopDropOption;
