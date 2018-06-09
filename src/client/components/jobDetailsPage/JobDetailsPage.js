import React, { Component } from "react";
import { connect } from "react-redux";
import JobItem from "../jobsPage/JobItem";
import Loading from "../Loading";
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
      return <Loading />;
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
        <h2>
          <b>Title:</b> {jobTitle}
        </h2>
        <div>
          <b>Posted by</b> {employerName}
        </div>
        <div>
          <b>Salary:</b> {minimumSalary} - {maximumSalary} {currency}
        </div>
        <div>
          <b>Location:</b> {locationName}
        </div>

        <p>
          <b>Description:</b> {jobDescription}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs, fetchedSingleJob }) => ({
  jobs,
  fetchedSingleJob
});

export default connect(mapStateToProps, { fetchSingleJob })(JobDetailsPage);
