import { useState } from 'react'

const PersonForm = (props) => {
    const persons = props.persons
    const setPersons = props.setPersons

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

        if (validName(newName) === true) {
            window.alert(newName + " is already exist.")
        } else {
            const nameObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }
            setPersons(persons.concat(nameObject))
            props.parentCallback(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }

    //Check if the name is duplicate
    const validName = (para) => {
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name === para) {
                return true
            }
        }
        return false
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