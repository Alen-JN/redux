const initialState = {
  products: [
    {
      id: 1,
      nm: "Cake",
      quantity: 10,
    },
    {
      id: 2,
      nm: "Ice Cream",
      quantity: 15,
    },
    {
      id: 3,
      nm: "Candy",
      quantity: 30,
    },
  ],
  cart: [],
  totalItems: 0,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY":
      if (state.cart.length === 0) {
        state.cart.push(action.payload);
        console.log(state.cart);
      } else {
        state.cart.push(action.payload);
      }
      state.cart[0].quantity += 1;

    default:
      return state;
  }
};

export default cakeReducer;
