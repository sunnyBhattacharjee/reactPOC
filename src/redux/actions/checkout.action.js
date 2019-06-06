import { FORMFIELD } from "../constants/action.type";


export const checkRequired = (formName, data) => dispatch => {
         dispatch({
           type: FORMFIELD.VALIDATION.REQUIRED,
           payload: { id: formName, event: data }
         });
       };

export const checkEmail = (formName, data) => dispatch => {
         dispatch({
           type: FORMFIELD.VALIDATION.EMAIL,
           payload: { id: formName, event: data }
         });
       };

export const createForm = (formName,data) => dispatch => {
  dispatch({
    type: FORMFIELD.CREATE,
    payload: {id: formName, value: data }
  });
};

export const setTouched = (formName,data) => dispatch => {
  dispatch({
    type: FORMFIELD.VALIDATION.TOUCHED,
    payload: {id: formName, value: data.id }
  });
  dispatch({
    type: FORMFIELD.VALIDATION.REQUIRED,
    payload: { id: formName, event: data }
  });
};
