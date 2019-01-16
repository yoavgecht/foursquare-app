import React, { Component } from 'react';

class TableHeaders extends Component {
    componentDidMount() {
        this.props.cleanTable();
    }
    render() {
        return(
            <th>{this.props.venue.name}{this.props.winner === this.props.venue.name && <h4 className="winner">Winner!</h4>}</th>
        ) 
    } 
}

export default TableHeaders;