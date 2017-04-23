import store from "../store.js";
import { createStore } from "redux";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      isSent: false, //md
      text: "", //md
      confirmationMsg: "", //md
      surveyAnswers: [],
      startClick: false, //pardy
      name: "",
      data: [],
      modal: false
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
    //pardy start


    case "START":
      return Object.assign({}, state, {
        startClick: !state.startClick,
        name: action.name
      });

    case "LOAD_DATA":
      var newData = state.data.slice();
      newData.push(action.data);
      return Object.assign({}, state, {
        data: newData
      });

    case "MODAL_TOGGLE":
      return Object.assign({}, state, {
        modal: !state.modal
      });

    case "CURRENT_QUESTION":
      return Object.assign({}, state, {
        question: action.question,
        answer: action.answer,
        value: action.value
      });
    //CURRENT_QUESTION isn't doing anything, should assign
    // question, answer, value during MODAL case instead

    //pardy end


    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
}
