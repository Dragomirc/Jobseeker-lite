import React from "react";
import _ from "lodash";
import JobItem from "./JobItem";
import Loading from "../Loading";

const JobsList = ({ jobs }) => {
  const renderJobs = _.map(jobs, job => (
    <JobItem key={job.jobId} jobDetails={job} />
  ));
  const jobsNumber = Object.keys(jobs).length;
  if (!jobsNumber) {
    return <Loading />;
  }

return (
<div className="jobsList-container">
    <div className="jobsList-title">{jobsNumber} Jobs & Vacancies</div>
    <ul className="list-group">{renderJobs}</ul>
</div>   
    );
};

export default JobsList;
