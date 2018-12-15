import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Search />
          <Table />
      </div>
    );
  }
}

export default App;
