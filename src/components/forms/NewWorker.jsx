import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { url_image, opts_image } from '../../config'

class NewWorker extends Component {
  state={
    file: '',
    imagePreviewUrl: '',
    number: '',
    firstname: '',
    lastname: '',
    entry: '',
    department: '',
    area: '',
    position: '',
    filePath: ''
  }

    async componentDidMount(){
    
    }

    onSubmit = async e =>{
        e.preventDefault();
        
        const formData =  new FormData(document.getElementById('form'))

        opts_image.body = formData;
        const res_image = await fetch(url_image, opts_image);
        const data3 = await res_image.json();

        const input = { 
            number: this.state.number,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            entry: this.state.entry,
            department: this.state.department,
            area: this.state.area,
            position: this.state.position,
            picture_URL: data3.imageUrl
          }
        this.props.newWorker(input)
    }

    onInput = e =>{
        this.setState({[e.target.name]: e.target.value})    
    }

    showState = () =>{
        console.log(this.state)
    }

    onChangeTime = e =>{
        const time = 'T00:00:00.000-06:00'
        this.setState({[e.target.name]: String(e.target.value) + time}); 
    };
    
    imagePreview = () =>{
        if (this.state.imagePreviewUrl) {
            return <div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="150" height='150' /> </div>
        } else{
            return
        }    
    }

    fileChangedHandler = e => {
     
        const file = e.target.files[0]
        const filePath = e.target.value
        if(file.size > 50000){
            const input = document.getElementById('image')
            input.value = ''
            console.log('too much', input.value)
            return this.setState({filePath: ''})
        }
        else {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                this.setState({
                    imagePreviewUrl: reader.result,
                    file: file,
                    filePath
                });
            }
     
            reader.readAsDataURL(file)
            console.log(file.size)
        }
      }    

    render(){
        return ReactDOM.createPortal(
            <div className="Modal">
            <div className="modal-content">
                    <h2>New Employee</h2>
                    <form id='form' onSubmit={this.onSubmit} encType="multipart/form-data">
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor='id'>Employee ID: </label></td>
                                    <td><input onChange={this.onInput} name='number' type='text' id='id' maxLength='5' size='20' required></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='firstname'>Firstname: </label></td>
                                    <td><input onChange={this.onInput} name='firstname' type='text' id='firstname' maxLength='15' size='20' required></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='lastname'>Lastname: </label></td>
                                    <td><input onChange={this.onInput} name='lastname' type='text' id='lastname' maxLength='15' size='20' required></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='entry'>Entry Date: </label></td>
                                    <td><input onChange={this.onChangeTime} name='entry' type='date' id='entry' size='20' required></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='department'>Department: </label></td>
                                    <td><input onChange={this.onInput} name='department' type='text' id='department' maxLength='15' required></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='area'>Area: </label></td>
                                    <td><input onChange={this.onInput} name='area' type='text' id='area' maxLength='15' required></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='position'>Position: </label></td>
                                    <td><input onChange={this.onInput} name='position' type='text' id='position' maxLength='15' required></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor='image'>Picture: </label></td>
                                    <td><input type="file" name="image" id='image' onChange={this.fileChangedHandler} value={this.state.path} accept=".png, .jpg, .jpeg"></input></td>
                                </tr>
                            </tbody>
                        </table>
                        {this.imagePreview()}
                        <Link to="/"><button type="button">Close</button></Link>
                        {/* <button type="button" onClick={this.showState}>state</button> */}
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>,document.querySelector('#modal')
        );
    }
}

export default NewWorker;