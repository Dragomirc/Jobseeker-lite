import React, { Component } from "react";
import { connect } from "react-redux";
import JobsList from "./JobsList";
import DistanceSelection from "./DistanceSelection"
import SearchBar from "../SearchBar";
import { fetchJobs, storeSearchValues } from "../../actions/index";

class JobsPage extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.storeSearchValues(params)
    this.props.fetchJobs(params);
 
  }

 
  render() {

    return (
      <div>
        <SearchBar fromJobsPage={true} />
        <DistanceSelection />
        <JobsList jobs={this.props.jobs} />
      </div>
    );
  }
}

const mapStateToProps = ({ jobs, searchValues }) => ({
  jobs,
  searchValues
});
export default connect(mapStateToProps, { fetchJobs, storeSearchValues })(
  JobsPage
);
