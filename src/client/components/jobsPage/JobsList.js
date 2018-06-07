import React from "react";
import _ from "lodash";
import JobItem from "./JobItem";

const JobsList = ({ jobs }) => {
  const renderJobs = _.map(jobs, job => (
    <JobItem key={job.jobId} jobDetails={job} />
  ));

  if (!Object.keys(jobs).length) {
    return <div>Loading...</div>;
  }
  return <ul className="list-group">{renderJobs}</ul>;
};

export default JobsList;
