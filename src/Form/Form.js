import React from 'react';

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
            name: '',
            email: '',
            phone: ''
        };
    }

    onChange(event){
        this.setState({
            name: event.target.name,
            email: event.target.email,
            phone: event.target.phone
        });
    }

    onEnter(event){
        if(event.keyCode === 13){
            this.onSubmit();
        }
    }

    onSubmit(){
        this.props.submitAction(this.state);
        this.setState({
            name:'',
            email: '',
            phone: ''
        });
    }

    render(){
        return(
            <div>
                <h3>Name</h3>
                <input 
                    type="text" 
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                    value={this.state.name}
                    />
                <h3>Email</h3>
                <input 
                    type="text" 
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                    value={this.state.email}
                    />
                <h3>Phone</h3>
                <input 
                    type="text" 
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