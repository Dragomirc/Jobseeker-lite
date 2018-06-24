import React from "react";

const DistanceSelection = ({ distanceFromLocation, onDistanceSelect }) => {
  const options = [0, 1, 2, 3, 5, 10, 15, 20, 30, 50];
  const renderedOptions = options.map(option => (
    <option key={option} value={option}>
      {option} miles
    </option>
  ));
  return (
    <div className="distance-selection">
      <div>Distance</div>
      <select value={distanceFromLocation} onChange={onDistanceSelect}>
        {renderedOptions}
      </select>
    </div>
  );
};

export default DistanceSelection;
