import store from "../store.js";
import { createStore } from "redux";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      isSent: false, //md
      text: "", //md
      confirmationMsg: "" //md
    };
  }

  switch (action.type) {
    //markdown start
    case "SENT_TEXT":
      return Object.assign({}, state, {
        text: action.text
      });

    case "SAVE_NOTE":
      return state;

    case "CLEAR":
      return Object.assign({}, state, {
        text: "",
        confirmationMsg: "Your note's been saved"
      });

    case "CLEAR_CONFIRM":
      return Object.assign({}, state, {
        confirmationMsg: ""
      });
    //markdown end


    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
}
