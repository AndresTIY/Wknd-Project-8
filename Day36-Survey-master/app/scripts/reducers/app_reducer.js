const initialState = {
  answers: []
}

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
  }



  switch (action.type) {

    case "SAVE_ANSWER":
      var surveyAns = state.answers.slice();
      surveyAns.push(action.answer);
      return Object.assign({}, state, {
          answers: surveyAns
        });



    default:
      console.debug("Unhandled State");
      return state

  }



  return state;
}
