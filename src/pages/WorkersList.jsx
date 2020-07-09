import React, { Component } from 'react';
import Worker from '../components/worker.jsx'
import { Link } from 'react-router-dom';

class WorkersList extends Component{
    state ={
        profiles: this.props.profiles
    }

    renderProfiles = () =>{
        return this.state.profiles.map( profile =>
            <Worker key={profile._id} 
                number={profile.number}
                firstname={profile.firstname}
                lastname={profile.lastname}
                entry={profile.entry}
                department={profile.department}
                area={profile.area}
                position={profile.position}
                picture_URL={profile.picture_URL}
            />
        )
    }

    render(){
        return (
            <div className='workerList_container'>
                <h2 className='section_title'>Employees List</h2>
                <div className='controls'>
                    <Link to='/employees/new'><button type='button'>Add Employee</button></Link>
                </div>
                
                {this.renderProfiles()}
            </div>
        )
    }
}

export default WorkersList