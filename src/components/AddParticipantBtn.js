import React from 'react';

const AddParticipantBtn = (props) => {
    return(
        <button className="btn btn-primary btn-lg add-btn" 
        onClick={props.addParticipant} disabled={props.disabled}>
        Add Participant
        </button>
    ) 
}

export default AddParticipantBtn;