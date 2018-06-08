import React from "react";
import _ from "lodash";


const LabelSelection = ({searchValues}) => {
    console.log("searchValues", searchValues)
    const renderLabels = _.map( searchValues, label => <li>{label}</li>);
    console.log("RenderLabels", renderLabels)
    return (<ul>{renderLabels} </ul>)
}

export default LabelSelection;