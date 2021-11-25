import React from "react";

function MostPopular() {
  const pictures = [
    {
      img: "https://pyxis.nymag.com/v1/imgs/cfe/0c6/9e86db4238775a4d667aecb95a0ba01f58-astronaut.rhorizontal.w600.jpg",
    },
    {
      img: "https://s3.voyapon.com/wp-content/uploads/2020/12/29044959/Dogs_05.jpg",
    },
    {
      img: "https://media.architecturaldigest.com/photos/5d4c9cf54d8de70009fa4f0a/master/w_2500,h_1667,c_limit/boo'oh1258.jpg",
    },
    {
      img: "https://www.azpetvet.com/wp-content/uploads/dog-chew-toy.jpg",
    },
  ];

  const renderCards = pictures.map((card, index) => (
    <div class="col-lg" key={index}>
      <div class="card mb-3">
        <img src={card.img} class="card-img-top" alt="" />
      </div>
    </div>
  ));

  return (
    <>
      <h5 class="display-5 text-center text-muted my-5">Most Popular</h5>
      <div class="row">{renderCards}</div>
    </>
  );
}

export default MostPopular;
