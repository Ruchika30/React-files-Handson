import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

import ValidationComponent from "./Person/ValidationComponent";
import Charcomponent from "./Person/Charcomponent";

class App extends Component {
  state = {
    persons: [
      { id: "skksk", name: "shanu", age: 28 },
      { id: "skks", name: "Manu", age: 29 },
      { id: "allal", name: "Stephanie", age: 27 }
    ],
    otherState: "some other value",
    showPersons: false,
    userinput: " "
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { id: "skksk", name: newName, age: 28 },
        { id: "skks", name: "Manu", age: 29 },
        { id: "allal", name: "Stephanie", age: 27 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: "Max", age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: "Stephanie", age: 26 }
    //   ]
    // });
  };

  deletePersonHandler = personindex => {
    //const persons = this.state.persons; //Lets  get all elemts first
    //Flaw in above code is that the object is passed by refrence, means chnge is reflectde in original array.
    //Hence we use below sread operatr to make chnages in new array not chnging old one.
    const persons = [...this.state.persons];
    persons.splice(personindex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  /* Assignment */
  eventchangelistener = event => {
    this.setState({ userinput: event.target.value });
  };

  deletechar = index => {
    const text = this.state.userinput.split("");
    text.splice(index, 1);
    const updatedtext = text.join("");
    this.setState({ userinput: updatedtext });
  };

  render() {
    const charlist = this.state.userinput.split("").map((ch, index) => {
      return (
        <Charcomponent
          char={ch}
          key={index}
          clicked={() => this.deletechar(index)}
        />
      );
    });

    const style = {
      backgroundColor: "green",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "white"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      //Setting Bg color gynamically just like the above baribale "persons"
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "white"
      };
    }

    /*
    //Another way of adding classes
    let classes = ["red", "bold"].join(" ");
    */

    debugger;
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    /* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}

          {/* Assignment */}
          <input
            type="text"
            onChange={this.eventchangelistener}
            /* Always show latest value from state  */
            value={this.state.userinput}
          />
          <p>{this.state.userinput}</p>

          <ValidationComponent userinp={this.state.userinput} />
          {charlist}
        </div>
      </StyleRoot>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default Radium(App);
