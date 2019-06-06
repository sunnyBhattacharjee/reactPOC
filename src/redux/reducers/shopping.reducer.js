import { globalState } from "../constants/globalState";
import { SHOPPING } from "../constants/action.type";

export default (state = globalState.ShoppingReducer, action) => {
  switch (action.type) {
    case SHOPPING.SETSTORE:
      return {
        shoppingItems: action.payload,
        totalItems: 0
      };
    case SHOPPING.INCREMENT:
      state.shoppingItems[action.payload].count =
        state.shoppingItems[action.payload].count + 1;
      const totalItemsInc = state.totalItems + 1;
      return { 
        shoppingItems: state.shoppingItems, 
        totalItems: totalItemsInc 
      };
    case SHOPPING.DECREMENT:
      const totalItemsDec =
        state.shoppingItems[action.payload].count > 0
          ? state.totalItems - 1
          : state.totalItems;
      state.shoppingItems[action.payload].count =
        state.shoppingItems[action.payload].count > 0
          ? state.shoppingItems[action.payload].count - 1
          : state.shoppingItems[action.payload].count;
      
      return { 
        shoppingItems: state.shoppingItems, 
        totalItems: totalItemsDec 
      };
    default:
      return state;
  }
};
