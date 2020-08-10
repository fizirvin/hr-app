import React from 'react';
import { Link } from 'react-router-dom';
import update from '../images/list.png'
import { connect } from 'react-redux'
import {selectProfile } from '../actions'

const Worker = ({picture_URL, lastname, firstname, number, entry, position, area, department, profile, selectProfile}) => {

    
        return (
            <div className='worker_container'>
                <table className='worker_table'>
                    <tbody>
                        <tr>
                            <td rowSpan='2' colSpan='1' className='image_field'><img className="image_profile" src={picture_URL} alt="Logo" height="50" width="50"/></td>
                            <td rowSpan='1' colSpan='2' className='name_field'><h3>{firstname + ' ' + lastname}</h3></td>
                            <td rowSpan='1' colSpan='1' className='entry_field'>Entry: {entry}</td>
                            <td rowSpan='1' colSpan='1' className='number_field'>ID: {number}</td>
                            <td rowSpan='2' colSpan='1' className='update_field'><Link to='/profile' onClick={()=>selectProfile(profile)}><img alt="" height= "26" src={update}/></Link></td>
                        </tr>
                        <tr>
                            <td rowSpan='1' colSpan='1' className='position_field'>{position}</td>
                            <td rowSpan='1' colSpan='1' className='area_field'>Area: {area}</td>
                            <td rowSpan='1' colSpan='2' className='department_field'>Department of: {department}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


export default connect(null,{selectProfile} )(Worker)