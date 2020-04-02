import React, { Component } from 'react';
import './App.css';
import {ColumnContainer} from "../column-container/column-container";
import {columnsDescriptionDataService} from "../data/data-source";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColumnContainer columnsDescription={columnsDescriptionDataService}/>
      </div>
    );
  }
}

export default App;
