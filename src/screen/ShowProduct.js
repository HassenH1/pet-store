import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getItem } from "../Actions/actions";

function ShowProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getItem(params.id));
  }, [params]);

  return (
    <div className="container">
      {/* Name as title here */}
      <div className="row">
        <div className="col-lg">image goes here</div>
        <div className="col-lg">Items details</div>
      </div>
    </div>
  );
}

export default ShowProduct;
