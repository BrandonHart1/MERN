import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };

    }

    render() {
        return (
            <>
                <div>
                    <h2>{ this.props.lastname }, { this.props.firstname }</h2>
                    <p>{ this.state.age }</p>  
                    <p>{ this.props.haircolor }</p>
                    <button onClick={() => {this.setState({age: this.state.age + 1}) }}>Bithday Button for {this.props.firstName} {this.props.lastName}</button>
                </div>
                <hr />
            </>
        )
    }
}

export default PersonCard;