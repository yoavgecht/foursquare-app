import React, { Component } from 'react';

class TableCells extends Component {
    state = {mouseHover: false};

    handleMouseEnter = (e, rowIndex) => {
        if(!e.currentTarget.disabled) {
            this.setState(prevState => ({
            mouseHover: true
            }));
        }
        return false;
    }

    handleMouseLeave = (e) => {
        if(!e.currentTarget.disabled){
            this.setState(prevState => ({
                mouseHover: false
            }));
        }
        return false;
    }

    render() {
        const activeCell = this.state.mouseHover ? 'active-cell' : 'counter-venue';
        return(
            <td>
                <button 
                onClick={(e) => this.props.increaseVote(e, this.props.rowIndex)}
                key={this.props.id} 
                onMouseLeave={(e) => this.handleMouseLeave(e, this.props.rowIndex)}
                onMouseOver={(e) => this.handleMouseEnter(e, this.props.rowIndex)}
                disabled={this.props.participants[this.props.rowIndex].name.length < 2 || this.props.participants[this.props.rowIndex].voted } 
                name={`counterVenue${this.props.index}`} 
                className={activeCell}></button>
            </td>
        ) 
    }
    
}

export default TableCells;