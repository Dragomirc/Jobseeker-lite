import React, { Component } from "react";
import { connect } from "react-redux";
import * as qs from "query-string";
import JobsList from "./JobsList";
import DistanceSelection from "./DistanceSelection";
import SearchBar from "../SearchBar";
import { fetchJobs, storeSearchValues, resetJobs } from "../../actions/index";
import { createPath } from "../helperFunctions";

class JobsPage extends Component {
  componentDidMount() {
    const values = qs.parse(this.props.location.search);
    this.props.storeSearchValues(values);
  }

  onDistanceSelect = event => {
    const { storeSearchValues, resetJobs } = this.props;
    storeSearchValues({ distanceFromLocation: event.target.value });
    resetJobs();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchValues, fetchJobs, history } = this.props;
    // console.log("HISTORY", this.props);
    if (prevProps.searchValues !== searchValues) {
      history.push(createPath(searchValues));
      this.props.fetchJobs(searchValues);
    }
  }
  render() {
    const { locationName } = qs.parse(this.props.location.search);
    const { distanceFromLocation } = this.props.searchValues;
    return (
      <div>
        <SearchBar fromJobsPage={true} />
        <div className="jobsPage-container">
          {locationName && (
            <DistanceSelection
              distanceFromLocation={distanceFromLocation}
              onDistanceSelect={this.onDistanceSelect}
            />
          )}
          <JobsList jobs={this.props.jobs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs, searchValues }) => ({ jobs, searchValues });
export default connect(mapStateToProps, {
  fetchJobs,
  storeSearchValues,
  resetJobs
})(JobsPage);
