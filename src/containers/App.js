import React, { Component } from "react";
import classes from "./App.module.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

import AuthContext from "../context/auth-context";

class App extends Component {
  state = {
    persons: [
      { id: "0", name: "Simo", age: 30 },
      { id: "1", name: "Nadia", age: 32 },
      { id: "2", name: "Achraf", age: 25 }
    ],
    showPersons: false,
    authenticated: false
  };

  deletePersonHandler = index => {
    let persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangedHandler = (event, id) => {
    const persons = this.state.persons.slice();
    const personIndex = persons.findIndex(p => p.id === id);
    persons[personIndex].name = event.target.value;
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          personClicked={this.deletePersonHandler}
          nameChanged={this.nameChangedHandler}
        />
      );
    }

    return (
      <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}
      >
        <WithClass classes={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </WithClass>
      </AuthContext.Provider>
    );
  }
}

export default App;
