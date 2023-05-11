const reducer = (state, action) => {
  const { type, payload } = action;
  let newCart = [] ;
  switch (type) {
    case "ADD_TO_CART":
      // logic

      const searchItemIndex = state.cart.findIndex((cartItem) => cartItem.id === payload.id)
      if(searchItemIndex === -1){
        const newCartItem = { ...payload, quantily: 1 };
          newCart = [...state.cart, newCartItem];
      }else {
        newCart = [...state.cart];
        newCart[searchItemIndex].quantily += 1;
      }
      // const newCartItem = {...payload,quantily: 1};
      // const newCart = [...state.cart,newCartItem]
       return {
        ...state,
        cart: newCart,
      };
    case "PLUS_QUANTITY":
      //LOGIC CODE
    newCart = state.cart.map((item) => {
      if(item.id === payload){
        return {
          ...item,
          quantily: item.quantily + 1,
        }
      } else {
        return { ...item };
      }
    });
      return { ...state, cart: newCart };
    case "MINUS_QUANTITY":
      //LOGIC CODE
      newCart = state.cart.map((item) => {
        if(item.id === payload){
          if(item.quantily <= 1 ){
            return { ...item, quantity: 1 };
          }
          return {
            ...item,
            quantily: item.quantily - 1,
          };
        }else {
          return { ...item };
        }
      });
      return { ...state, cart: newCart };
    case "DELETE_CART_ITEM":
      console.log({payload})
      //LOGIC CODE
      const filtedCart = state.cart.filter((cart) => cart.id !== payload.id)
      return { ...state, cart: filtedCart };
    default:
      return state;
  }
};

export default reducer;
