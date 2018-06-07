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
        <div>Posted by {employerName}</div>
        <div>
          Salary: {minimumSalary} - {maximumSalary} {currency}
        </div>
        <div>Location: {locationName}</div>
        <p>Description: {jobDescription}</p>
      </li>
    </Link>
  );
};

export default JobItem;
