import React from "react";

import Person from "./Person/Person";

const persons = props => (
  <div>
    {props.persons.map((person, index) => (
      <Person
        key={person.id}
        clicked={() => props.personClicked(index)}
        changed={event => props.nameChanged(event, person.id)}
        name={person.name}
        age={person.age}
      />
    ))}
  </div>
);

export default persons;
