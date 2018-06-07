import React,{Component} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {storeSearchValues, fetchJobs} from "../../actions/index";

class DistanceSelection extends Component{
    state = {
        distanceFromLocation : "10"
    }

    onDistanceSelect  = (event) => {
        const {searchValues, storeSearchValues, fetchJobs,history} = this.props;
        this.setState({distanceFromLocation : event.target.value}, 
            () => { storeSearchValues({distanceFromLocation: this.state.distanceFromLocation});
                   const { keywords = "", locationName = "" } = searchValues;
                   history.push(`/jobs/${keywords}/${locationName}/${this.state.distanceFromLocation}`);
                   fetchJobs({...searchValues,...this.state});
                }
        );
  
        
        
        

    }

    render(){
        const { distanceFromLocation : distanceFromLocationParams } = this.props.match.params;
        const { distanceFromLocation } = this.state;
        console.log("distanceFromLocationParams", this.props.match.params)
        return(
        <div>
        <div>Distance</div>
        <select value={distanceFromLocationParams ? distanceFromLocationParams : distanceFromLocation } onChange={this.onDistanceSelect}>
            <option value={0}>0 miles</option>
            <option value={1}>1 mile</option>
            <option value={3}>3 miles</option>
            <option value={5}>5 miles</option>
            <option value={10}>10 miles</option>
            <option value={15}>15 miles</option>
            <option value={20}>20 miles</option>
            <option value={30}>30 miles</option>
            <option value={50}>50 miles</option>
        </select>
        </div>)       
    
    }
}

const mapStateToProps = ({searchValues}) => ({searchValues});

export default withRouter(connect(mapStateToProps,{storeSearchValues, fetchJobs})(DistanceSelection));