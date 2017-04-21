import store from "../store.js";
import { createStore } from "redux";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      isSent: false, //md
      text: "", //md
      confirmationMsg: "", //md
      surveyAnswers: []
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
        confirmationMsg: "Your note has been saved, click here to close message ✖️"
      });

    case "CLEAR_CONFIRM":
      return Object.assign({}, state, {
        confirmationMsg: ""
      });
    //markdown end
    //survey start
    case "SAVE_ANSWER":
      var surveyAns = state.surveyAnswers.slice();
      surveyAns.push(action.answer);
      return Object.assign({}, state, {
        surveyAnswers: surveyAns
      });
    //survey end


    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
}
