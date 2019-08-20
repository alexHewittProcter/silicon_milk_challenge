import React, { Component } from 'react';
import './App.css';
import ApplicantCardWrapper from './ApplicantCardWrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants :[]
    };
    this.getUsers = this.getUsers.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  
  componentDidMount() {
    this.getUsers();
  }
  
  getUsers() {
    fetch('/api/users')
      .then(data => data.json())
      .catch(err => console.log(err))
      .then(data => this.setState({applicants:data}));
  }

  handleStatusChange(id,newStatus) {
    console.log(this.state.applicants.map(data => {
      if(data.applicantId === id) {
        data.applicantStatus = newStatus;
      }
      return data;
    }));
    this.setState((state,props) => ({
      applicants:state.applicants.map(data => {
        if(data.applicantId === id) {
          data.applicantStatus = newStatus;
        }
        return data;
      })
    }));
    fetch('/api/user/status',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({post:{ id: id,status:newStatus }})
    })

  }
  
render() {
  // console.log(this.state.applicants);
    return (
      <div className="App container-fluid">
        <div className='row'>
          {this.state.applicants.map((data,index) => <ApplicantCardWrapper key={index} applicant={data} handleStatusChange={this.handleStatusChange}/>)}
        </div>
      </div>
    );
  }
}

export default App;