import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';

import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.getVenues = this.getVenues.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.state = {
        searchTerm: '',
        venues: null
    }
  }

   handleSearchInput(e) {
      this.setState({searchTerm: e.target.value})
   }

  getVenues = async (e) => {
        e.preventDefault();
        let searchTerm = this.state.searchTerm;
        let res = await axios.get(`https://api.foursquare.com/v2/venues/search?client_id=VHLN2OXT2Q4JKVW21ACRW4FF1YR0I50WZWQLQMKBLPN1T1J5&v=20170801&query=lunch&near=${searchTerm}&client_secret=OHBZO41UXZWK1B1NEJG2JG2O52DCBSU13TIJSDVWTXXRIH5T&limit=3`);
        let venues = res.data.response.venues;
        console.log(venues);
        this.setState({venues});
  }

  render() {
    return (
      <div className="container">
          <Search getVenues={this.getVenues} handleSearchInput={this.handleSearchInput} searchTerm={this.state.searchTerm}/>
          <Table venues={this.state.venues} />
      </div>
    );
  }
}

export default App;
