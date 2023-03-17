import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName};
    setPersons(persons.concat(newPerson));
    setNewName('');
  }

  const changeNewName = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={changeNewName} value={newName}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.name} person={person}></Person>)}
      </ul>
    </div>
  )
}

const Person = (props) => {
  return (
    <div>{props.person.name}</div>
  )
}

export default App
