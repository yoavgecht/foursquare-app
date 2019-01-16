import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddParticipantBtn from './AddParticipantBtn';
import AddParticpantTextInput from './AddParticipantTextInput';
import { increaseParticipantVote, addParticipant, cleanParticipants} from '../actions/index';
import TableHeaders from './TableHeaders';
import TableCells from './TableCells';

class Table extends Component {
    constructor(props){
    super(props);
    this.renderTableHeaders = this.renderTableHeaders.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.increaseVote = this.increaseVote.bind(this);
    this.handleAddParticipant = this.handleAddParticipant.bind(this);
    this.cleanTable = this.cleanTable.bind(this)
    this.state={ 
        participants: [],
        winner:null,
        disableAddParticipantBtn: false
    }
  }

  cleanTable() {
      this.props.cleanParticipants();
      this.setState({participants: [], disableAddParticipantBtn: false, winner: null});
  }

  renderTableHeaders() {
    return this.props.venues.map((venue, index) => {
        return (
            <TableHeaders 
            key={venue.id}
            index={index} 
            venue={venue} 
            winner={this.state.winner} 
            cleanTable={this.cleanTable} 
            />
        )
    }) 
  }

  renderTableCells(rowIndex) {
      return this.props.venues.map((venue, index) => {
          return (
              <TableCells rowIndex={rowIndex} 
              index={index} 
              key={venue.id} 
              name={venue.name} 
              participants={this.props.participants} 
              increaseVote={this.increaseVote}
              />
          )
      })
  }

  handleAddParticipant(){
    this.setState({disableAddParticipantBtn : true});
    this.props.addParticipant();
  }

  handleInputChange(e, index) {
     let participants = [...this.props.participants];
     participants[index].name = e.target.value;
     this.setState({ participants })
  }
  
  increaseVote(e, index) {
    const name = e.target.name;
    this.props.increaseParticipantVote(name, index);
    var winner = this.calculateWinner();
    this.setState({disableAddParticipantBtn: false, winner})
  }

  calculateWinner(){
      var venue1 = 0;
      var venue2 = 0;
      var venue3 = 0;
      this.state.participants.forEach((participant) => {
        if(participant.counterVenue0 > 0) {
            venue1 = ++venue1;
        } else if(participant.counterVenue1 > 0) {
            venue2 = ++venue2;
        } else {
            venue3 = ++venue3;
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
            {this.props.venues ? <div className="col-md-12 text-center">
                <div className="wrapper">
                {this.props.venues.length > 2 ? <table className="table-bordered" cellPadding="0">
                    <tbody>
                        <tr>
                            <th>Participants</th>
                            {this.renderTableHeaders()}
                       </tr>
                        {this.props.participants.length > 0 ? this.props.participants.map((participant, index) => {
                            return (
                                <tr key={index}>
                                    <AddParticpantTextInput participant={participant} 
                                    handleInputChange={this.handleInputChange} 
                                    index={index} 
                                    participants={this.props.participants}
                                    />

                                    {this.renderTableCells(index)}
                                </tr>
                            )
                            }) : null}
                    </tbody>
                </table> : <div>Venues not found</div>}           
                {this.props.venues.length > 2 ? 
                <AddParticipantBtn disableAddParticipantBtn={this.state.disableAddParticipantBtn} handleAddParticipant={this.handleAddParticipant}/> : null}
                </div>
            </div> : null} 
        </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseParticipantVote: (name, index) => {dispatch(increaseParticipantVote(name, index))},
    addParticipant: () => {dispatch(addParticipant())},
    cleanParticipants: () => {dispatch(cleanParticipants())}
  }
}

const mapStateToProps = ({venues, participants}) => {
    debugger;
    return {venues, participants}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);