/*jshint esversion: 6 */
import React, { Component } from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // parameterState: "name"
      parameterState: null
    };

    this.people = [
      {
        name: "John Sina",
        birth: "11/30/2011"
      }, {
        name: "Barcy Washington",
        birth: "09/16/1992"
      }, {
        name: "Peter Parker",
        birth: "01/16/1992"
      }, {
        name: "Jimmy Shergil",
        birth: "12/12/2001"
      }, {
        name: "Alexander Alfred",
        birth: "02/09/1891"
      }, {
        name: "Krishna Gupta",
        birth: "12/01/1982"
      }, {
        name: "Sania Mirza",
        birth: "11/30/2011"
      }, {
        name: "Lata Pathak",
        birth: "10/31/1999"
      }
    ];

    this.sortByParameter = this.sortByParameter.bind(this);
    this.compareDates = this.compareDates.bind(this);
    this.compareNames = this.compareNames.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  compareDates(person1, person2) {
    // Add comparison logic
    const date1 = new Date(person1.birth);
    const date2 = new Date(person2.birth);

    return date1 < date2 ? -1 : date1 > date2 ? 1 : 0;
  }

  compareNames(person1, person2) {
    // Add comparison logic
    return person1.name < person2.name ? -1 : person1.name > person2.name ? 1 : 0;
  }

  sortByParameter(parameterState) {
    // set state of 'parameterState' here
    this.setState({
      parameterState
    });
  }

  sortBy(parameterState) {
    this.sortByParameter(parameterState);
    // Complete this...
    if (!parameterState) {
      return;
    }

    if (parameterState === "name") {
      this.people.sort(this.compareNames);
    } else if (parameterState === "age") {
      this.people.sort(this.compareDates);
    } else {
      return;
    }
  }

  render() {
    // Radio and Table components need props...
    // Refer to tests for details...

    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Radio
          sortBy={this.sortBy}
        ></Radio>
        <Table people={this.state.parameterState === null ? [] : this.people}></Table>
      </div>
    );
  }
}

export default App;