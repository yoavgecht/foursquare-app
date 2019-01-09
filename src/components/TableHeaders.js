import React, { Component } from 'react';

class TableHeaders extends Component {
    componentDidUpdate(prevProps) {
        if(this.props.venue !== prevProps.venue){
            this.props.cleanParticipants();
        }
        
    }
    render() {
        return(
            <th key={this.props.index}>{this.props.venue.name}{this.props.winner === this.props.venue.name && <div>WINNER!</div>}</th>
        ) 
    }
    
}

export default TableHeaders;