import React, { Component } from "react";
import { connect } from "react-redux";
import * as qs from "query-string"
import JobsList from "./JobsList";
import DistanceSelection from "./DistanceSelection"
import SearchBar from "../SearchBar";
import { fetchJobs, storeSearchValues } from "../../actions/index";

class JobsPage extends Component {
  componentDidMount() {
    const values = qs.parse(this.props.location.search);
    this.props.storeSearchValues(values)
    this.props.fetchJobs(values);
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

const mapStateToProps = ({ jobs }) => ({ jobs });
export default connect(mapStateToProps, { fetchJobs, storeSearchValues })(
  JobsPage
);
