import noteService from "./services/noteService"

const Person = (props) => {

    // Remove contact
    const removeContact = (id) => {
        if (window.confirm("Do you really want to delete?")) {
            noteService
                .remove(id)
                .then(response => {
                    props.updatePersons(props.persons.filter(each => each.id != id), "delete")
                })
                .catch(error => {
                    props.updatePersons(props.persons, "error")
                })
        }
    }

    return (
        <div>
            {props.persons.map(person =>
                <div key={person.id}>
                    <span >{person.name} {person.number}  </span>
                    <button onClick={() => {removeContact(person.id)}}>delete</button>
                </div>
            )}
        </div>
    )
}

export default Person