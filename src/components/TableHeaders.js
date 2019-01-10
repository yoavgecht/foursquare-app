import React, { Component } from 'react';

class TableHeaders extends Component {
    componentDidUpdate(prevProps) {
        if(this.props.venue !== prevProps.venue){
            this.props.cleanTable();
        }
        
    }
    render() {
        return(
            <th key={this.props.index}>{this.props.venue.name}{this.props.winner === this.props.venue.name && <h4 className="winner">Winner!</h4>}</th>
        ) 
    }
    
}

export default TableHeaders;