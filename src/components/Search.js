import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
        this.fetchLocations = this.fetchLocations.bind(this);
        this.state = {locations: []};
    };

    fetchLocations() {
        
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                     <h2>Launchplace</h2>
                    <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                            <label for="inputPassword2" className="sr-only">Password</label>
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={}>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;