import React from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.css";

import WithClass from "../../../hoc/WithClass";

import AuthContext from "../../../context/auth-context";

const person = props => {
  return (
    <WithClass classes={classes.Person}>
      <AuthContext.Consumer>
        {context =>
          context.authenticated ? <p>Logged In</p> : <p>Please Log In</p>
        }
      </AuthContext.Consumer>
      <p onClick={props.clicked}>
        I am {props.name} and i am {props.age} years old
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </WithClass>
  );
};

person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  changed: PropTypes.func
};

export default person;
