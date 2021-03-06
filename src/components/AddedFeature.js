import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeFeature(props.feature);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// CONNECTING ADDEDFEATURE.JS TO OUR STORE AND removeFeature ACTION
export default connect(null, { removeFeature })(AddedFeature);
