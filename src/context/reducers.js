// const cartReducer = (state, action) => {

 
//             return state
    
// }
// export default cartReducer

const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, {...action.payload,qty:1}],
        };
      case "REMOVE_FROM_CART":
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id),
          };
      case "SET_PRODUCTS":
        // FillterProd=products;
        return {
          ...state,
          products: action.payload,
          FillterProd: action.payload,
        };
      case "men's clothing":

        // console.log("men's clothing");
        return {
          // console.log();
          ...state,
          FillterProd: state.products.filter(item => item.category == "men's clothing"),
        };
      case "jewelery":

        // console.log("men's clothing");
        return {
          // console.log();
          ...state,
          FillterProd: state.products.filter(item => item.category == "jewelery"),
        };
      case "electronics":

        // console.log("men's clothing");
        return {
          // console.log();
          ...state,
          FillterProd: state.products.filter(item => item.category == "electronics"),
        };
      case "women's clothing":

        // console.log("men's clothing");
        return {
          // console.log();
          ...state,
          FillterProd: state.products.filter(item => item.category == "women's clothing"),
        };
      case "lowest":
   
        return {
          ...state,
          FillterProd: state.FillterProd.sort((a, b)=>a.price-b.price),
         
        };
      case "highest":
   
        return {
          ...state,
          FillterProd: state.FillterProd.sort((a, b)=>b.price-a.price),
         
        };
      case "a-z":
   
        return {
          ...state,
          FillterProd: state.FillterProd.sort((a, b) => a.title.localeCompare(b.title)),
         
        };
      case "z-a":
   
        return {
          ...state,
          FillterProd: state.FillterProd.sort((a, b) => b.title.localeCompare(a.title)),
         
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  