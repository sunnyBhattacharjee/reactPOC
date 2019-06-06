import { FORMFIELD } from "../constants/action.type";
import { globalState } from "../constants/globalState";

export default (state = globalState.CheckOutReducer, action) => {
  

  switch (action.type) {
    case FORMFIELD.CREATE:
      state[action.payload.id]= action.payload.value;
      return state;
    case FORMFIELD.VALIDATION.REQUIRED:
      if (action.payload.event.value === "") {
        state[action.payload.id].status[action.payload.event.id].valid = false;
        state[action.payload.id].validation_message[ action.payload.event.id] =
          action.payload.event.id.charAt(0).toUpperCase() +
          action.payload.event.id.slice(1) +
          " is required";
      } else {
        state[action.payload.id].value[
          action.payload.event.id
        ] = action.payload.event.value;
        state[action.payload.id].status[
          action.payload.event.id
        ].valid = true;
        state[action.payload.id].validation_message[
          action.payload.event.id
        ] = "";
      }
      return {contactInfo: state.contactInfo};
    case FORMFIELD.VALIDATION.EMAIL:
      if (!(/.+@.+\.[A-Za-z]+$/.test(action.payload.event.value))) {
        state[action.payload.id].status[
          action.payload.event.id
        ].valid = false;
        state[action.payload.id].validation_message[
          action.payload.event.id
        ] =
          "Please enter valid email";
      } else {
        state[action.payload.id].value[action.payload.event.id] =
          action.payload.event.value;
        state[action.payload.id].status[
          action.payload.event.id
        ].valid = true;
        state[action.payload.id].validation_message[
          action.payload.event.id
        ] = "";
      }
      return {contactInfo: state.contactInfo};
    case FORMFIELD.VALIDATION.TOUCHED:
      if (action.payload.value !== "ALL") {
      state[action.payload.id].status[action.payload.value].touched = true;
    } else {
      let ids = Object.keys(state[action.payload.id].status);
      ids.forEach(id => {
        state[action.payload.id].status[id].touched = true;
      });
    }
    return { contactInfo: state.contactInfo };
    default:
      return state;
  }
};
