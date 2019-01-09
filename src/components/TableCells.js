import React, { Component } from 'react';

class TableCells extends Component {
    debugger;
    render() {
        return(
            <td key={this.props.id} onClick={(e) => this.props.increaseVote(e, this.props.rowIndex)}><button disabled={this.props.participants[this.props.rowIndex].name.length < 2 || this.props.participants[this.props.rowIndex].voted } name={`counterVenue${this.props.index}`} className="counter-venue">V</button></td>
        ) 
    }
    
}

export default TableCells;