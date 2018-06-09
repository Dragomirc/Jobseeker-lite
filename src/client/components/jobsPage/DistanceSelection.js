import React from "react";

const DistanceSelection = ({ distanceFromLocation, onDistanceSelect }) => {
  return (
    <div className="distance-selection">
      <div>Distance</div>
      <select value={distanceFromLocation} onChange={onDistanceSelect}>
        <option value={0}>0 miles</option>
        <option value={1}>1 mile</option>
        <option value={3}>3 miles</option>
        <option value={5}>5 miles</option>
        <option value={10}>10 miles</option>
        <option value={15}>15 miles</option>
        <option value={20}>20 miles</option>
        <option value={30}>30 miles</option>
        <option value={50}>50 miles</option>
      </select>
    </div>
  );
};

export default DistanceSelection;
