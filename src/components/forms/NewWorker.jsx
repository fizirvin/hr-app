import React, { useState }  from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { url_image, opts_image } from '../../config'

const NewWorker = ( ) => {
 const [ file, setFile ] = useState('');
 const [ imagePreviewUrl, setImagePreviewUrl ] = useState('');
 const [ number, setNumber ] = useState('');
 const [ firstname, setFirstname ] = useState('');
 const [ lastname, setLastname ] = useState('');
 const [ entry, setEntry ] = useState('');
 const [ department, setDepartment ] = useState('');
 const [ area, setArea ] = useState('');
 const [ position, setPosition ] = useState('');
 const [ filePath, setFilePath ] = useState('');

    const onSubmit = async e =>{
        e.preventDefault();
        
        const formData =  new FormData(document.getElementById('form'))

        opts_image.body = formData;
        const res_image = await fetch(url_image, opts_image);
        const data3 = await res_image.json();
        
        const time = 'T00:00:00.000-06:00'
        const date = String(entry) + time
        const input = { 
            number: number,
            firstname: firstname,
            lastname: lastname,
            entry: date,
            department: department,
            area: area,
            position: position,
            picture_URL: data3.imageUrl
          }
        this.props.newWorker(input)
    }

    const onInput = e =>{
        const value = e.target.value
        if(e.target.name === 'number'){
            return setNumber(value)
        }
        else if(e.target.name === 'firstname'){
            return setFirstname(value)
        }
        else if(e.target.name === 'lastname'){
            return setLastname(value)
        }
        else if(e.target.name === 'department'){
            return setDepartment(value)
        }
        else if(e.target.name === 'area'){
            return setArea(value)
        }
        else if(e.target.name === 'position'){
            return setPosition(value)
        }    
    }


    const onChangeTime = e =>{
        const entry = e.target.value
        setEntry(entry); 
    };
    
    const imagePreview = () =>{
        if (imagePreviewUrl) {
            return <div className="image-container" ><img src={imagePreviewUrl} alt="icon" width="150" height='150' /> </div>
        } else{
            return
        }    
    }

    const fileChangedHandler = e => {
     
        const file = e.target.files[0]
        const filePath = e.target.value
        if(file.size > 50000){
            const input = document.getElementById('image')
            input.value = ''
            console.log('too much', input.value)
            return setFilePath('')
        }
        else {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result)
                setFile(file)
                setFilePath(filePath)
            }
     
            reader.readAsDataURL(file)
            // console.log(file.size)
        }
      }    

    
    return ReactDOM.createPortal(
        <div className="Modal">
        <div className="modal-content">
                <h2>New Employee</h2>
                <form id='form' onSubmit={onSubmit} encType="multipart/form-data">
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor='id'>Employee ID: </label></td>
                                <td><input onChange={onInput} value={number} name='number' type='text' id='id' maxLength='5' size='20' required></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='firstname'>Firstname: </label></td>
                                <td><input onChange={onInput} value={firstname} name='firstname' type='text' id='firstname' maxLength='15' size='20' required></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='lastname'>Lastname: </label></td>
                                <td><input onChange={onInput} value={lastname} name='lastname' type='text' id='lastname' maxLength='15' size='20' required></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='entry'>Entry Date: </label></td>
                                <td><input onChange={onChangeTime} value={entry} name='entry' type='date' id='entry' size='20' required></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='department'>Department: </label></td>
                                <td><input onChange={onInput} value={department} name='department' type='text' id='department' maxLength='15' required></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='area'>Area: </label></td>
                                <td><input onChange={onInput} value={area} name='area' type='text' id='area' maxLength='15' required></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='position'>Position: </label></td>
                                <td><input onChange={onInput} value={position} name='position' type='text' id='position' maxLength='15' required></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor='image'>Picture: </label></td>
                                <td><input type="file" name="image" id='image' onChange={fileChangedHandler} accept=".png, .jpg, .jpeg"></input></td>
                            </tr>
                        </tbody>
                    </table>
                    {imagePreview()}
                    <Link to="/"><button type="button">Close</button></Link>
                    {/* <button type="button" onClick={this.showState}>state</button> */}
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>,document.querySelector('#modal')
    );
    
}

export default NewWorker;