import React from "react";
import _ from "lodash";
import JobItem from "./JobItem";
import Loading from "../Loading";

const JobsList = ({ jobs }) => {
  const renderJobs = _.map(jobs, job => (
    <JobItem key={job.jobId} jobDetails={job} />
  ));

  if (!Object.keys(jobs).length) {
    return <Loading />;
  }
  return <ul className="list-group">{renderJobs}</ul>;
};

export default JobsList;
