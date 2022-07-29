// ----------------------------- PART 2c Database------------------------------------
import { useEffect, useState } from "react";
import axios from 'axios';
import InputForm from "./Component 2c/InputForm";
import Countries from "./Component 2c/Coutries";

const App = () => {
    const [notes, setNotes] = useState([]);
    const [filterNote, setFilterNote] = useState([])
    
    useEffect(() => {
        console.log("effect");
        axios
            .get('http://localhost:3001/countries')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
    }, [])

    const callback = (child) => {
        setFilterNote(child);
    }


    return (
        <div>
            <InputForm notes={notes} callback={callback}/>
            <Countries filterNote={filterNote} />
        </div>
    )
}

export default App


// ----------------------------- PART 2b The phonebook------------------------------------
// import { useState } from 'react'
// import Filter from './Component 2b/Filter'
// import PersonForm from './Component 2b/PersonForm'
// import Person from './Component 2b/Person'

// const App = () => {
//     const [persons, setPersons] = useState([
//         { name: 'Arto Hellas', number: '040-123456', id: 1 },
//         { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//         { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//         { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//     ])

//     //Make a state for printing and filtering
//     const [printList, setPrintList] = useState(persons)

//     //Update the phonebook if new contact is added
//     const callback = (childData) => {
//         setPrintList(childData)
//         setPersons(childData)
//     }

//     //filter the phonebook for printing
//     const callbackFilter = (childData) => {
//         setPrintList(childData)
//     }

//     return (
//         <div>
//             <h2>Phonebook</h2>
//             <Filter persons={persons} parentCallbackFilter={callbackFilter} />

//             <h3>add a new contact</h3>
//             <PersonForm persons={persons} setPersons={setPersons} parentCallback={callback} />

//             <h3>Numbers</h3>
//             <Person persons={printList}/>
//         </div>
//     )
// }

// export default App

// ----------------------------- PART 2a Courses------------------------------------
// import Course from "./Component 2a/Course"

// const App = () => {
//     const courses = [
//         {
//             name: 'Half Stack application development',
//             id: 1,
//             parts: [
//                 {
//                     name: 'Fundamentals of React',
//                     exercises: 10,
//                     id: 1
//                 },
//                 {
//                     name: 'Using props to pass data',
//                     exercises: 7,
//                     id: 2
//                 },
//                 {
//                     name: 'State of a component',
//                     exercises: 14,
//                     id: 3
//                 },
//                 {
//                     name: 'Redux',
//                     exercises: 11,
//                     id: 4
//                 }
//             ]
//         },
//         {
//             name: 'Node.js',
//             id: 2,
//             parts: [
//                 {
//                     name: 'Routing',
//                     exercises: 3,
//                     id: 1
//                 },
//                 {
//                     name: 'Middlewares',
//                     exercises: 7,
//                     id: 2
//                 }
//             ]
//         }
//     ]

    
//     return (
//         courses.map((course) => {
//             return (
//                 <Course key={course.id} course={course} />
//             )
//         })
//     )
// }

// export default App