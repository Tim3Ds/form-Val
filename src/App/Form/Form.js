import React from 'react';
import './Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        //bind the specific instance of onchange from
        //this particular class to the onchange method
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEnter = this.onEnter.bind(this);

        //set default form state
        this.state = {
            name: 'your name',
            email: 'your@email.com',
            phone: '888-888-8888'
            
        };
    }

    onChange(event){

        this.setState({
            email: event.target.email,
            name: event.target.name,
            phone: event.target.phone
        });
    }

    onEnter(event){
        if(event.keyCode === 13){
            this.onSubmit();
        }
    }

    onSubmit(){
        //this.props.submitAction(this.state);
        this.setState({
            name:'',
            email: '',
            phone: ''
        });
    }

    render(){
        return(
            <div className='form'>
                <h3>Name</h3>
                <input 
                    type="text" 
                    id='name'
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                    value={this.state.name}
                    />
                <h3>Email</h3>
                <input 
                    type="text" 
                    id='email'
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                    value={this.state.email}
                    />
                <h3>Phone</h3>
                <input 
                    type="text" 
                    id='phone'
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                    value={this.state.phone}
                    />
                <h3>
                    <button onClick={this.onSubmit}>Submit</button>
                </h3>
            </div>
        )
    }
}

export default Form;