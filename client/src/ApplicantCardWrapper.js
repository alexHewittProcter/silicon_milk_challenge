import React, {Component} from 'react';
import ApplicantCard from './ApplicantCard';

export default class ApplicantCardWrapper extends Component {
    render() {
        return (
            <div className='card-wrapper col-lg-3 col-md-3 mx-auto col-sm-12'>
                <ApplicantCard applicant={this.props.applicant} handleStatusChange={this.props.handleStatusChange}/>
            </div>
        );
    }
}