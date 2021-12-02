import React, { useState, useEffect } from "react";
import { useCart } from "../context/shoppingcart-context";

function ShoppingCart() {
  const { getItemsFromCart, removeItemFromCart, shoppingCart } = useCart();
  const [subTotal, setSubTotal] = useState();
  const [total, setTotal] = useState(0);
  const shipping = 5.85;

  useEffect(() => {
    console.log("hitting here?");
    getSubTotal();
  }, [shoppingCart]);

  useEffect(() => {
    setTotal(subTotal + shipping);
  }, [subTotal]);

  const getSubTotal = () => {
    let sub = 0;
    for (let i of getItemsFromCart()) {
      sub += i.total;
    }
    setSubTotal(sub);
  };

  const remove = (item) => {
    removeItemFromCart(item);
  };

  const renderTitle = (
    <div className="col-lg-8 col-lg">
      <div className="row bg-light p-2">
        <div className="col-5">
          <span>PRODUCT</span>
        </div>
        <div className="col-2 text-center">
          <span>PRICE</span>
        </div>
        <div className="col-2">
          <span>QUANTITY</span>
        </div>
        <div className="col-2">
          <span>TOTAL</span>
        </div>
        <div className="col-1 text-center"></div>
      </div>
    </div>
  );

  const renderItems = getItemsFromCart().map((item) => (
    <div className="col-lg-8 col-lg border-bottom">
      <div className="row p-5">
        <div className="col-5">
          <span>{item.title}</span>
        </div>
        <div className="col-2 text-center">
          <span>{item.price}</span>
        </div>
        <div className="col-2 text-center">
          <span>{item.quantity}</span>
        </div>
        <div className="col-2 text-center">
          <span>${item.total}</span>
        </div>
        <div className="col-1 text-center" onClick={() => remove(item)}>
          <i class="fa fa-trash text-danger"></i>
        </div>
      </div>
    </div>
  ));

  const renderFinalPrice = (
    <div className="col-lg d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Summary</h5>
          <div className="row justify-content-between">
            <div className="col">
              <p>Subtotal:</p>
            </div>
            <div className="col text-end">
              <p>
                ${subTotal === 0 ? "0.00" : subTotal && subTotal.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <p>Discount:</p>
            </div>
            <div className="col text-end">
              <p>$0.00</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col border-bottom">
              <p>Shipping:</p>
            </div>
            <div className="col text-end border-bottom">
              <p>${shipping}</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <p>Total:</p>
            </div>
            <div className="col text-end">
              <p>${total && total.toFixed(2)}</p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={() => console.log("clicked checkout")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        {renderTitle}
        {renderItems}
        {renderFinalPrice}
      </div>
    </div>
  );
}

export default ShoppingCart;
