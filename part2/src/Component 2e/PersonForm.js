import { useState } from 'react'
import noteService from './services/noteService'

const PersonForm = (props) => {
    //State for each text input field
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameInput = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberInput = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    
    //Add new contact to the phone book
    const addContact = (event) => {
        event.preventDefault()
        const newPerson = {
            "name": newName,
            "number": newNumber,
            "id": props.persons.length + 1
        }

        //Check the if name is valide before add
        const checkValid = validName(newName)

        if (checkValid == true) {
            noteService
            .create(newPerson)
            .then(response => {
                props.updatePersons(props.persons.concat(newPerson), "add")
                setNewName('')
                setNewNumber('')
            })
            .catch(error => {
                props.updatePersons(props.persons, "error")
            })
        } 
        
        else {
            // Confirm before update the contact
            if( window.confirm(newPerson.name + " is already exist. Do you want to update the phone number?") ) {
                noteService
                    .update(checkValid, newPerson)
                    .then(response => {
                        // Modify the list while keeping the same ID for each people
                        const newPersonsList = [
                            ...props.persons,
                        ]
                        newPersonsList[checkValid - 1].number = newNumber

                        props.updatePersons(newPersonsList, "update")
                        setNewName('')
                        setNewNumber('')
                    })
                    .catch(error => {
                        props.updatePersons(props.persons, "error")
                    })
            }
        }
    }

    //Check if the name is duplicate
    const validName = (name) => {
        for (let i = 1; i < props.persons.length + 1; i++) {
            if (props.persons[i-1].name === name) {
                return i
            }
        }
        return true
    }

    return (
        <div>
            <form onSubmit={addContact}>
                <div>
                    name: <input
                        onChange={handleNameInput}
                        value={newName}
                    /> <br></br>
                    number: <input
                        onChange={handleNumberInput}
                        value={newNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm