import { SHOPPING } from "../constants/action.type";

export const shoppingSetAction = (shoppingItems) => dispatch => {
  dispatch({
    type: SHOPPING.SETSTORE,
    payload: shoppingItems
  });
};


export const shoppingIncrementAction = (index) => dispatch => {
  dispatch({
    type: SHOPPING.INCREMENT,
    payload: index
  });
};

export const shoppingDecrementAction = (index) => dispatch => {
  dispatch({
    type: SHOPPING.DECREMENT,
    payload: index
  });
};
