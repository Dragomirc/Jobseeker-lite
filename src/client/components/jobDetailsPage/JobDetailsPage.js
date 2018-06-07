import React, { Component } from "react";
import { connect } from "react-redux";
import JobItem from "../jobsPage/JobItem";
import { fetchSingleJob } from "../../actions/index";

class JobDetailsPage extends Component {
  componentWillMount() {
    if (!Object.keys(this.props.jobs).length) {
      const { id } = this.props.match.params;
      this.props.fetchSingleJob(id);
    }
  }
  render() {
    const { id } = this.props.match.params;
    const { jobs, fetchedSingleJob } = this.props;
    let job = jobs[id];

    if (!(Object.keys(jobs).length || Object.keys(fetchedSingleJob).length)) {
      return <div>Loading...</div>;
    }

    const {
      jobId,
      jobTitle,
      employerName,
      maximumSalary,
      minimumSalary,
      currency,
      jobUrl,
      locationName,
      jobDescription
    } =
      job || fetchedSingleJob;
    return (
      <div className="container">
        <h2>Title: {jobTitle}</h2>
        <div>Posted by {employerName}</div>
        <div>
          Salary: {minimumSalary} - {maximumSalary} {currency}
        </div>
        <div>Location: {locationName}</div>

        <p>Description: {jobDescription}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs, fetchedSingleJob }) => ({
  jobs,
  fetchedSingleJob
});

export default connect(mapStateToProps, { fetchSingleJob })(JobDetailsPage);
