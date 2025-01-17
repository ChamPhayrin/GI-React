import React, { Component, useContext } from 'react'
class Person extends Component {
  constructor(props){
    super(props)
    this.state = {
      person: {
        name: props.name,
        age: props.age,
        dob: props.dob
      }
    }
  }
  render() {
    return (
      <>
      <div>
        <p>
          Name: {this.state.person.name},
          Age: {this.state.person.age},
          DOB: {this.state.person.dob}
        </p>
      </div>
      </>
    )
  }
}

export default class BasicInfo extends Component {

  people = [{
    name: 'Victor',
    age: '20',
    dob: '08/24',
  },{
    name: 'Tommy',
    age: '20',
    dob: '06/09',
  },{
    name: 'Chamngary',
    age: '20',
    dob: '08/21',
  },{
    name: 'Lariz',
    age: '20',
    dob: '09/27',
  },{
    name: 'Natiya',
    age: '23',
    dob: '02/17',
  }]

  itteratePeople = this.people.map((person) => { return <Person name={person.name} age={person.age} dob={person.dob}/>})

  render() {
    return (
      <>
      {this.itteratePeople}
      </>
    )
  }
}
