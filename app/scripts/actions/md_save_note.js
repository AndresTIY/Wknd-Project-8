import api from "../../api.js";
import { connect } from "react-redux";
import container from "../containers/all.js";

export default function mdSaveNote(text) {
  return function(dispatch) {
    $.ajax({
      url: api.url + "/data/md_note",
      type: "POST",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        note: text
      })
    }).then((data, success) => {
      dispatch({ type: "CLEAR" });
    });
  };
}
