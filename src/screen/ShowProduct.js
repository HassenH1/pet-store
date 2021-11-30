import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getItem } from "../Actions/actions";
import Button from "../component/Button";

function ShowProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getItem(params.id));
  }, [params]);

  console.log(product, "<-0-huh?");

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 col-lg">
          <h3>{product && product.title}</h3>
          <img src={product && product.img} className="img-fluid" />
        </div>
        <div className="col-lg pt-5 justify-center align-items-center">
          <h3>{product && product.price}</h3>
          <div className="my-5">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Pick a size...</option>
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>
            <div className="row">
              <div className="col text-center">
                <div class="number-input md-number-input align-middle">
                  {/* <button
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  class="minus"
                ></button> */}
                  {/* <Button
                  onPress={() => console.log("hitting button")}
                  btnText={"-"}
                  type="primary"
                  size="md"
                />
                <input
                  class="p-1 text-center"
                  min="0"
                  name="quantity"
                  value="1"
                  type="number"
                />
                <Button
                  onPress={() => console.log("hitting button")}
                  btnText={"+"}
                  type="primary"
                  size="md"
                /> */}
                  {/* <button
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  class="plus"
                ></button> */}
                </div>
              </div>
              <div className="col">
                <Button
                  onPress={() => console.log("hitting button")}
                  btnText={"Add to Cart"}
                  type="warning"
                  size="lg"
                  width={"100"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
