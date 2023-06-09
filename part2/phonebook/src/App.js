import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import personService from './services/persons'
import Person from './components/Person';
import Notification from './components/Notification';

import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

  const initHook = () => {
    personService.getAll()
    .then(person => setPersons(person))
  }

  useEffect(initHook,[])

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber};
    if (havePerson(persons, newPerson)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      // setPersons(persons.concat(newPerson));
      personService
        .create(newPerson)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setMessage(`Added ${createdPerson.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        });
    }
    setNewName('');
    setNewNumber('');
  }

  const havePerson = (persons, newPerson) => {
    console.log(persons);
    console.log(newPerson);
    console.log(persons.some(person => person.name === newPerson.name))
    if (persons.some(person => person.name === newPerson.name)) {
      return true
    } else {
      return false
    }
  }

  const deletePerson = (id) => {
    console.log(id)
    const person = persons.filter(person => person.id === id);
    const personId = person[0].id;
    const personName = person[0].name;
    console.log(personName)
    if (window.confirm(`Do you want to delete ${personName}`)) {
      console.log(`Delete confirmed for ${personName}`);
      personService.remove(id);
      setPersons(persons.filter(person => person.id != personId));

    }
  }

  const changeNewName = (event) => {
    setNewName(event.target.value);
  }

  const changeNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}></Notification>
      <form>
        <div>
          name: <input onChange={changeNewName} value={newName}/>
        </div>
        <div>
          number: <input onChange={changeNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.name} person={person} deletePerson={deletePerson}></Person>)}
      </ul>
    </div>
  )
}

export default App
