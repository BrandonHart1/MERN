import React, { Component } from 'react';

// class PersonCard extends Component {

//     constructor(props) {
//         super(props);
//         state = {
//             age: props.age
//         };

//     }
    const PersonCard = props => {

    // render() 
        return (
            <>
                <div>
                    <h2>{ props.lastName }, { props.firstName }</h2>
                    <p>{ props.age }</p>  
                    <p>{ props.hairColor }</p>
                    {/* <button onClick={() => ({age: props.age + 1}) }>Bithday Button for {props.firstName} {props.lastName}</button> */}
                </div>
                <hr />
            </>
        )
    
}

export default PersonCard;