import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
import { fetchVenues } from '../actions/index';

class Search extends Component {
    constructor(props){
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleFetchVenues = this.handleFetchVenues.bind(this);
        this.state = {
            searchTerm: '',
        }
   }

   handleSearchInput(e) {
      this.setState({searchTerm: e.target.value})
   }

   handleFetchVenues(e) {
       e.preventDefault();
       this.props.fetchVenues(this.state.searchTerm)
   }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                     <h2 className="headline">Launchplace</h2>
                     <form className="form-inline mb-3" onSubmit={(e) => this.handleFetchVenues(e)}>
                        <div className="form-group mb-2">
                            <label htmlFor="inputPassword2" className="sr-only">Password</label>
                            <input type="text" className="form-control" id="search-input" placeholder="Search a city" value={this.state.searchTerm} onChange={(e) => this.handleSearchInput(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary ml-3 mb-2 search-btn" disabled={this.state.searchTerm.length < 1}>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(Search);