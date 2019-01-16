import React, { Component } from 'react';

class TableCells extends Component {
    state = {mouseHover: false};

    handleMouseEnter = (e, rowIndex) => {
        if(!e.currentTarget.disabled) {
            this.setState({mouseHover: true});
        }
        return false;
    }

    handleMouseLeave = (e) => {
        if(!e.currentTarget.disabled){
            this.setState({mouseHover: false});
        }
        return false;
    }

    render() {
        const activeCell = this.state.mouseHover ? 'active-cell' : 'counter-venue';
        return (
            <td>
                <button 
                onClick={(e) => this.props.increaseVote(e, this.props.rowIndex)}
                onMouseLeave={(e) => this.handleMouseLeave(e)}
                onMouseOver={(e) => this.handleMouseEnter(e)}
                disabled={this.props.participants[this.props.rowIndex].name.length < 2 || this.props.participants[this.props.rowIndex].voted } 
                name={`counterVenue${this.props.index}`} 
                className={activeCell}></button>
            </td>
        ) 
    }
}

export default TableCells;