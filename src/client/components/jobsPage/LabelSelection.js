import React from "react";
import _ from "lodash";

const LabelSelection = ({ searchValues }) => {
  const renderLabels = _.map(searchValues, label => <li>{label}</li>);
  return <ul>{renderLabels} </ul>;
};

export default LabelSelection;
