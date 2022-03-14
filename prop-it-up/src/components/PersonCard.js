import React, { Component } from 'react';

class PersonCard extends React.Component {
    render() {
        return (
            <div>
                <h2>{ this.props.lastName }, { this.props.firstName }</h2>
                <p>{ this.props.age }</p>
                <p>{ this.props.hairColor }</p>
            </div>
        )
    }
}

export default PersonCard;