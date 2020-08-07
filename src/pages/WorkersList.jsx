import React, { useEffect}  from 'react'
import { connect } from 'react-redux'
import { fetchProfiles } from '../actions'
import Worker from '../components/worker.jsx'
import { Link } from 'react-router-dom'

const WorkersList = ({profiles, fetchProfiles}) =>{
    useEffect(() =>{
        fetchProfiles();
        return 
    },[fetchProfiles])

    const renderProfiles = () =>{
        return profiles.map( profile =>
            <Worker key={profile._id} 
                number={profile.number}
                firstname={profile.firstname}
                lastname={profile.lastname}
                entry={profile.entry}
                department={profile.department}
                area={profile.area}
                position={profile.position}
                picture_URL={profile.picture_URL}
                profile={profile}
            />
        )
    }

    
    return (
        <div className='workerList_container'>
            <h2 className='section_title'>Employees List</h2>
            <div className='controls'>
                <div className='items_count'>items: {profiles.length}</div>
                <Link to='/employees/new'><button type='button'>Add Employee</button></Link>
            </div>
            
            {renderProfiles()}
        </div>
    )
    
}

const mapStateToProps = state =>({
    profiles: state.profiles
})

export default connect(mapStateToProps, {fetchProfiles})(WorkersList)