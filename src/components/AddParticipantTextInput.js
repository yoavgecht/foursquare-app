import React from 'react';

const AddParticpantTextInput = (props) => {
    return (
        <td><input type="text" className={props.participants[props.index].voted ? 'text-input-disabled' : ''} disabled={props.participants[props.index].voted} value={props.participant.name} onChange={(e) => {props.handleInputChange(e, props.index)}}/></td>
    )
};

export default AddParticpantTextInput;