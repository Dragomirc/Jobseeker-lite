import React from "react";
import { Link } from "react-router-dom";

const JobItem = ({
  jobDetails: {
    jobId,
    jobTitle,
    employerName,
    maximumSalary,
    minimumSalary,
    currency,
    jobUrl,
    locationName,
    jobDescription
  }
}) => {
  return (
    <Link to={`/jobDetails/${jobId}`}>
      <li className="list-group-item">
        <h2>{jobTitle}</h2>
        <div><b>Posted by</b> {employerName}</div>
        <div>
          <b>Salary:</b> {minimumSalary} - {maximumSalary} {currency}
        </div>
        <div><b>Location:</b> {locationName}</div>
        <p><b>Description:</b>{jobDescription}</p>
      </li>
    </Link>
  );
};

export default JobItem;
