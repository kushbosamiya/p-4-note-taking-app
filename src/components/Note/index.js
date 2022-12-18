import React from "react";
import { connect } from "react-redux";
import { removeNote } from "../../store/actions";

function Note(props) {
  return (
    <div class="note">
      <h4>{props.title}</h4>
      <p>{props.text}</p>

      <button class="delete" onClick={() => props.remove(props.id)} />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    remove: id => dispatch(removeNote(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Note);
