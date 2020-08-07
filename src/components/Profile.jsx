import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'


const Profile = ({profile }) => {
    
    return ReactDOM.createPortal(
        <div className="Modal">
        <div className="modal-content">
                <h2>New Employee</h2>
                <h2>{profile.firstname}</h2>
            </div>
        </div>,document.querySelector('#modal')
    );
}

const mapStateToProps = state =>({
    profile: state.profile
})


export default connect(mapStateToProps)(Profile);