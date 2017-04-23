import reducer from "../../app/scripts/reducers/app_reducer.js";
import { assert } from "chai";
const initialState = {
  isSent: false, //md
  text: "", //md
  confirmationMsg: "", //md
  surveyAnswers: [],
  startClick: false, //pardy
  name: "",
  data: [],
  modal: false
};

describe("maths", () => {
  it("adds 2 + 2", () => {
    assert.equal(4, 2 + 2);
  });
});

describe("app reducer", () => {
  it("should return the initial state", () => {
    assert.deepEqual(reducer(undefined, {}), initialState);
  });

  it("should handle SENT_TEXT", () => {
    let expectation = {
      text: ""
    };
    let actual = reducer({}, { type: "SENT_TEXT", text: "" });
    assert.deepEqual(expectation, actual);
  });
  it("should handle SAVE_NOTE", () => {
    let expectation = {};
    let actual = reducer({}, { type: "SAVE_NOTE" });
    assert.deepEqual(expectation, actual);
  });
  it("should handle CLEAR", () => {
    let expectation = {
      confirmationMsg: "Your note has been saved, click here to close message ✖️",
      text: ""
    };
    let actual = reducer(
      {},
      {
        type: "CLEAR",
        text: "",
        confirmationMsg: "Your note has been saved, click here to close message ✖️"
      }
    );
    assert.deepEqual(expectation, actual);
  });
  it("should handle CLEAR_CONFIRM", () => {
    let expectation = {
      confirmationMsg: ""
    };
    let actual = reducer(
      {},
      {
        type: "CLEAR_CONFIRM",
        confirmationMsg: ""
      }
    );
    assert.deepEqual(expectation, actual);
  });
  it("should handle SAVE_ANSWER", () => {
    let expectation = {
      confirmationMsg: ""
    };
    let actual = reducer(
      {},
      {
        type: "CLEAR_CONFIRM",
        confirmationMsg: ""
      }
    );
    assert.deepEqual(expectation, actual);
  });
  it("should handle START", () => {
    let expectation = {
      startClick: true || false,
      name: "action.name"
    };
    let actual = reducer(
      {},
      { type: "START", startClick: true || false, name: "action.name" }
    );
    assert.deepEqual(expectation, actual);
  });
  it("should handle LOAD_DATA", () => {
    let expectation = {
      data: []
    };
    let actual = reducer({}, { type: "LOAD_DATA", data: [] });
    assert.deepEqual(expectation, actual);
  });
  it("should handle MODAL_TOGGLE", () => {
    let expectation = {
      modal: true || false
    };
    let actual = reducer({}, { type: "MODAL_TOGGLE", modal: true || false });
    assert.deepEqual(expectation, actual);
  });
});
