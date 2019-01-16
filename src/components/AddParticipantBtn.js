import React from 'react';

const AddParticipantBtn = ({disableAddParticipantBtn, handleAddParticipant}) => (
    <button className="btn btn-primary btn-lg add-btn" 
    onClick={handleAddParticipant} disabled={disableAddParticipantBtn}>
    Add Participant
    </button>       
);

export default AddParticipantBtn;