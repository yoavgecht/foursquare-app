import React from 'react';

const AddParticipant = (props) => {
    return(
        <button className="btn btn-primary" onClick={props.addParticipant} disabled={props.disabled} >Add Participant</button>
    ) 
}

export default AddParticipant;