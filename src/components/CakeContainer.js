import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/CakeContainer.css";
import CakeDisplay from "./CakeDisplay";
function CakeContainer() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products);

  return (
    <div>
      <div>
        <ul>
          <li>
            <h1>Shop</h1>
          </li>
          <li className="icon">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16.5" cy="18.5" r="1.5" />
              <circle cx="9.5" cy="18.5" r="1.5" />
              <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
            </svg>
          </li>
          {/* {inCart > 0 ? <li className="in-cart">{inCart}</li> : <></>} */}
        </ul>
      </div>
      {cart.map((item) => {
        return (
          item.nm && <CakeDisplay nm={item.nm} id={item.id} q={item.quantity} />
        );
      })}
    </div>
  );
}

export default CakeContainer;
