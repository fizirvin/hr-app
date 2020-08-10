import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


const Profile = ({profile }) => {
    
    return ReactDOM.createPortal(
        <div className="Modal">
        <div className="modal-content">
                <h2>Employee</h2>
                <h2>{profile.firstname}</h2>
                <img src={profile.picture_URL}></img>
                <Link to="/"><button type="button">Close</button></Link>
            </div>
        </div>,document.querySelector('#modal')
    );
}

const mapStateToProps = state =>({
    profile: state.profile
})


export default connect(mapStateToProps)(Profile);