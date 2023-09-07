import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CakeDisplay(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleAddtoCart = () => {
    dispatch({
      type: "BUY",
      payload: { id: props.id, name: props.nm, quantity: 1 },
    });
  };

  return (
    <div>
      <h2>
        Number Of {props.nm} : {props.q}
      </h2>

      <h2>IN cart : </h2>

      <button
        className="add-to-cart"
        role="button"
        onClick={() => handleAddtoCart()}
      >
        ADD to Cart
      </button>

      {/* <>
          <div className="btns">
            <button className="plus-btn">+</button>
            <button className="minus-btn">-</button>
          </div>
          <div>
            <button className="remove-btn" role="button">
              Remove Item
            </button>
          </div>
        </> */}
    </div>
  );
}

export default CakeDisplay;
