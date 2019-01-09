import React, { Component } from 'react';
class Search extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                     <h2 className="headline">Launchplace</h2>
                     <form className="form-inline" onSubmit={(e) => this.props.getVenues(e)}>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="inputPassword2" className="sr-only">Password</label>
                            <input type="text" className="form-control" id="search-input" placeholder="Search" value={this.props.searchTerm} onChange={(e) => this.props.handleSearchInput(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2 search-btn">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;