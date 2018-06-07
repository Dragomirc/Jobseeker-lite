import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { storeSearchValues, fetchJobs } from "../actions/index";


class SearchBar extends Component {
  state = {
    keywords: "",
    locationName: ""
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => this.props.storeSearchValues(this.state));  
  };

  onFormSubmit = event => {
    event.preventDefault();
    const {keywords, locationName} = this.state
    const { fetchJobs, fromJobsPage } = this.props;   
    this.props.history.push(`/jobs/${keywords}/${locationName}`);
    fromJobsPage ? fetchJobs(this.state) : null;
      
    
  };

  render() {
    const { keywords, locationName } = this.state;
    const { keywords : keywordsParams,locationName : locationNameParams } = this.props.match.params;
   
    return (
      <form
        className="main-search-bar form-group row"
        onSubmit={this.onFormSubmit}
      >
        <div className="col-sm-5 col-md-5">
          <label htmlFor="search-term">What</label>
          <input
            className="form-control"
            onChange={this.onInputChange}
            value = {keywords ? keywords : (keywordsParams ? keywordsParams : "") }
            type="text"
            id="search-term"
            name="keywords"
            placeholder={ "e.g marketing manager"}
          />
        </div>
        <div className="col-sm-5 col-md-4">
          <label htmlFor="location">Where</label>
          <input
            className="form-control"
            onChange={this.onInputChange}
            value = {locationName ? locationName : (locationNameParams ? locationNameParams : "") }
            type="text"
            id="location"
            name="locationName"
            placeholder={ "town or city"}
          />
        </div>

        <div className="col-sm-2 col-md-3 col-xs-12 main-search-bar__btn">
          <button className="btn btn-primary">Search Jobs</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ searchValues }) => ({ searchValues });

export default withRouter(
  connect(mapStateToProps, {
    storeSearchValues,
    fetchJobs
  })(SearchBar)
);
