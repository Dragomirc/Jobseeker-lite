import React,{Component} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {storeSearchValues, fetchJobs} from "../../actions/index";
import { createPath } from "../helperFunctions"
import * as qs from "query-string";

class DistanceSelection extends Component{
    state = {
        distanceFromLocation : "10"
    }
   
    onDistanceSelect  = (event) => {       
        this.setState({distanceFromLocation : event.target.value},
            () => { 
                const { searchValues, fetchJobs, storeSeachValues, history} = this.props;
                storeSearchValues({...this.state});
                history.push(createPath({...searchValues,...this.state}));
                fetchJobs({...searchValues,...this.state});            
        });                
   }

    render(){
        const { distanceFromLocation : distanceFromLocationParams } = qs.parse(this.props.location.search);
        const { distanceFromLocation } = this.state;
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