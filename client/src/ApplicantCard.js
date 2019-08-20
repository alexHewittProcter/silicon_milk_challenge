import React, {Component} from 'react';
import Button from './Button';

export default class ApplicantCard extends Component {
    
    render() {
        const {applicant} = this.props;
        let statusButtons;
        switch(applicant.applicantStatus) {
            case 'ACCEPTED' : 
                statusButtons = (<div className='row'>
                    <div className='col-md-12'>
                        <Button title='Decline' status='danger' onClick={() => this.props.handleStatusChange(applicant.applicantId,'DECLINED')}/>
                    </div>
                </div>);
            break;
            case 'DECLINED' : 
                statusButtons = (<div className='row'>
                    <div className='col-md-12'>
                        <Button title='Accept' status='success' onClick={() => this.props.handleStatusChange(applicant.applicantId,'ACCEPTED')}/>
                    </div>
                </div>);
            break;
            default : 
                statusButtons = (<div className='row'>
                    <div className='col-md-6'>
                        <Button title='Accept' status='success' onClick={() => this.props.handleStatusChange(applicant.applicantId,'ACCEPTED')}/>
                    </div>
                    <div className='col-md-6'>
                        <Button title='Decline' status='danger' onClick={() => this.props.handleStatusChange(applicant.applicantId,'DECLINED')}/>
                    </div>
                </div>);
            break;


        }        
        // console.log(applicant);
        return (<div className="card">
            <img className="card-img-top" src={applicant.applicantPicture} alt='Top profile' />
            <div className='card-body'>
                <h4 className='card-title'>
                    {applicant.applicantFirstName + " " + applicant.applicantLastName}
                </h4>
                <div className='row'>
                    <div className='col-md-6'>
                        <a href={'mailto:' + applicant.applicantEmail}>
                            <Button status='primary' title='Email'/>
                        </a>  
                    </div>
                    <div className='col-md-6'>
                        <a href={applicant.applicantLinkedin}>
                            <Button status='primary' title='LinkedIn'/>
                        </a>
                    </div>
                </div>
                <br/>
                {statusButtons}
            </div>
        </div>);
    }
}