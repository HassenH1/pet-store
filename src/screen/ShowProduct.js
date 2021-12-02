import React, { useEffect, useState } from "react";

import { useCart } from "../context/shoppingcart-context";
import { useParams } from "react-router-dom";
import { getItem } from "../Actions/actions";
import Button from "../component/Button";

function ShowProduct() {
  const { appendToCart } = useCart();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    totalBasedOnQuantity();
  }, [quantity, product]);

  useEffect(() => {
    setProduct(getItem(params.id));
  }, [params]);

  const totalBasedOnQuantity = () => {
    let originalPrice = product && product.price.split("$")[1];
    let theTotal = quantity * Number(originalPrice);
    setTotal(theTotal);
  };

  const modifyQuantity = (type) => {
    if (type === "plus") {
      setQuantity((n) => n + 1);
    } else {
      setQuantity((n) => {
        if (n === 1) {
          return n;
        }
        return n - 1;
      });
    }
  };

  const selectSize = (e) => {
    setSize(e.target.value);
  };

  const addToCart = () => {
    if (size === "") {
      errorMessage();
      return;
    }
    appendToCart({
      ...product,
      quantity,
      size,
      total,
    });
  };

  const errorMessage = () => {
    setError("Please pick a size");
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 col-lg">
          <img src={product && product.img} className="img-fluid" alt="" />
        </div>
        <div className="col-lg pt-5 justify-center align-items-center">
          <div className="d-flex flex-row justify-content-evenly">
            <h3>{product && product.title}</h3>
            <h3>{product && product.price}</h3>
          </div>
          <div className="my-5">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={selectSize}
            >
              <option selected>Pick a size...</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div className="row">
              <div className="col text-center">
                <div className="number-input md-number-input align-middle">
                  <div className="input-group">
                    <span className="input-group-btn" onClick={modifyQuantity}>
                      <button
                        type="button"
                        className="quantity-left-minus btn btn-danger btn-number"
                        data-type="minus"
                        data-field=""
                      >
                        <span>-</span>
                      </button>
                    </span>
                    <div className="form-control input-number">{quantity}</div>
                    <span
                      className="input-group-btn border border-primary"
                      onClick={() => modifyQuantity("plus")}
                    >
                      <button
                        type="button"
                        className="quantity-right-plus btn btn-success btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span>+</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <Button
                  onPress={addToCart}
                  btnText={"Add to Cart"}
                  type="warning"
                  size="lg"
                  width={"100"}
                />
              </div>
              <div className="text-center">
                <p className="text-danger">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
