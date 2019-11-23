import { ADD_CONTACT } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    default:
      return state;
  }
};
