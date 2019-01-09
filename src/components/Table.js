import React, { Component } from 'react';
import AddParticipant from './AddParticipant';
import AddParticpantTextInput from './AddParticipantTextInput';
import TableHeaders from './TableHeaders';
import TableCells from './TableCells';

class Table extends Component {
    constructor(props){
    super(props);
    this.renderTableHeaders = this.renderTableHeaders.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.increaseVote = this.increaseVote.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.cleanParticipants = this.cleanParticipants.bind(this)
    this.state={ 
        participant: {name: ''}, 
        participants: [],
        winner:'',
        disableAddParticipantBtn: false,
        isHovered: false
    }
  }

  cleanParticipants() {
      debugger;
      this.setState({participants: [], disableAddParticipantBtn: false});
  }

  renderTableHeaders() {
    return this.props.venues.map((venue, index) => {
        return (
            <TableHeaders key={index} index={index} venue={venue} winner={this.state.winner} cleanParticipants={this.cleanParticipants} />
        )
    }) 
  }

  renderTableCells(rowIndex) {
      return this.props.venues.map((venue, index) => {
          return (
              <TableCells rowIndex={rowIndex} index={index} key={venue.id} name={venue.name} participants={this.state.participants} increaseVote={this.increaseVote}/>
          )
      })
  }

  handleInputChange(e, index) {
     let participants = [...this.state.participants];
     participants[index].name = e.target.value;
     this.setState({ participants })
  }
  

  addParticipant() {
     let participant = {
        id: 0,
        name: '',
        counterVenue0: 0,
        counterVenue1: 0,
        counterVenue2: 0,
        voted: false
     }
     this.setState(prevState => ({
        participants: [...prevState.participants, participant],
        disableAddParticipantBtn : true
    }));
  }

  increaseVote(e, index) {
    debugger;
    let participants = [...this.state.participants];
    participants[index][e.target.name] = participants[index][e.target.name] + 1;
    participants[index].voted = true;
    this.setState({ participants, disableAddParticipantBtn: false });
    var winner = this.calculateWinner();
    this.setState({winner})
  }

  handleHover() {
      this.setState(prevState => ({
        isHovered: !prevState.isHovered
      }))
  }

  calculateWinner(){
      debugger;
      var venue1 = 0;
      var venue2 = 0;
      var venue3 = 0;
      this.state.participants.forEach((participant) => {
        if(participant.counterVenue0 > 0) {
            venue1 = venue1 + 1;
        } else if(participant.counterVenue1 > 0) {
            venue2 = venue2 + 1;
        } else {
            venue3 = venue3 + 1;
        }
      })

      if(venue1 > venue2 && venue1 > venue3){
          return this.props.venues[0].name;
      } else if(venue2 > venue1 && venue2 > venue3){
          return this.props.venues[1].name;
      }  else if(venue3 > venue1 && venue3 > venue2) {
          return this.props.venues[2].name;
      } else if(venue1 === venue2 || venue1 === venue3 || venue2 === venue3) {
          return null;
      }
  }

  render(){
    return(
        <div className="row">
            <div className="col-md-12">
                {this.props.venues ? <table className="table">
                    <tbody>
                        <tr>
                            <th>Participants</th>
                            {this.renderTableHeaders()}
                       </tr>
                        {this.state.participants.length > 0 ? this.state.participants.map((participant, index) => {
                            return (
                                <tr key={index}>
                                    <AddParticpantTextInput participant={participant} handleInputChange={this.handleInputChange} index={index} participants={this.state.participants}/>
                                    {this.renderTableCells(index)}
                                </tr>
                            )
                            }) : null}
                    </tbody>
                </table> : null}
                {this.props.venues ? <AddParticipant addParticipant={this.addParticipant} participants={this.state.participants} disabled={this.state.disableAddParticipantBtn}/> : null}
            </div>  
        </div>
    )
  }
}

export default Table;