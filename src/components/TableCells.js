import React, { Component } from 'react';

class TableCells extends Component {
    state = {mouseHover: false};

    handleMouseEnter = (e) => {
        debugger;
        if(!e.target.disabled){
            console.log('mouse enter');
            this.setState(prevState => ({
            mouseHover: true
            }));
        }
        
    }

    handleMouseLeave = (e) => {
        debugger;
        if(!e.target.disabled){
            console.log('mouse leave');
            this.setState(prevState => ({
                mouseHover: false
            }));
        }
    }

    hanldeMouseHover
    render() {
        debugger;
        const activeCell = this.state.mouseHover ? 'active-cell' : 'counter-venue';
        return(
            <td>
                <button 
                onClick={(e) => this.props.increaseVote(e, this.props.rowIndex)}
                key={this.props.id} 
                onMouseLeave={(e) => this.handleMouseLeave(e)}
                onMouseEnter={(e) => this.handleMouseEnter(e)}
                disabled={this.props.participants[this.props.rowIndex].name.length < 2 || this.props.participants[this.props.rowIndex].voted } 
                name={`counterVenue${this.props.index}`} 
                className={activeCell}></button>
            </td>
        ) 
    }
    
}

export default TableCells;