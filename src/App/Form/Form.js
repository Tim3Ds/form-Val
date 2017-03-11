import React from 'react';
import './Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        //bind the specific instance of onchange from
        //this particular class to the onchange method
        this.onSubmit = this.onSubmit.bind(this);
        this.onEnter = this.onEnter.bind(this);

        //set default form state
        this.state = {
            name: '',
            email: '',
            phone: '',
            valid: false
            
        };
    }

    onChangeName(event){
        let reg = /^[a-z ,.'-]+$/i
        if(!reg.test(event.target.value)){
            let elm = document.getElementById('name')
            elm.className = 'error'
            this.setState({
                valid: false
            })      
        }else{
            let elm = document.getElementById('name')
            elm.className = 'good'
            this.setState({
                valid: true
            })
        }
        this.setState({
            name: event.target.value
        })
    }
    onChangeEmail(event){
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!reg.test(event.target.value)){
            let elm = document.getElementById('email')
            elm.className = 'error'
            this.setState({
                valid: false
            })    
        }else{
            let elm = document.getElementById('email')
            elm.className = 'good'
            this.setState({
                valid: true
            })
        }
        this.setState({
            email: event.target.value
        })
    }
    onChangePhone(event){
        let reg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
        if(!reg.test(event.target.value)){
            let elm = document.getElementById('phone')
            elm.className = 'error'
            this.setState({
                valid: false
            })   
        }else{
            let elm = document.getElementById('phone')
            elm.className = 'good'
            this.setState({
                valid: true
            })
        }
        this.setState({
            phone: event.target.value
        })
    }

    onEnter(event){
        if(event.keyCode === 13){
            this.onSubmit();
        }
    }

    onSubmit(event){
        event.preventDefault();
        if(this.state.valid){

            this.setState({
                name:'',
                email: '',
                phone: ''
            });
        }
    }

    render(){
        return(
            <div className='form'>
                <tr>
                    <td>Name</td>
                    <td>
                        <input 
                            type="text" id="name"
                            onChange={this.onChangeName.bind(this)}
                            onKeyDown={this.onEnter}
                            placeholder="Your Name"
                            value={this.state.name}
                            />
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input 
                            type="text" id='email'
                            onChange={this.onChangeEmail.bind(this)}
                            onKeyDown={this.onEnter}
                            placeholder="your@email.address"
                            value={this.state.email}
                            />
                    </td>
                    
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>
                        <input 
                            type="text" id='phone'
                            onChange={this.onChangePhone.bind(this)}
                            onKeyDown={this.onEnter}
                            placeholder="***-***-****"
                            value={this.state.phone}
                            />
                    </td>
                </tr>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;