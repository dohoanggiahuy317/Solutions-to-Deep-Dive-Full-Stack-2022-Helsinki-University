// =========================================== Part 3b ===========================================
//Declration
require('dotenv').config()
const phoneNote = require("./models/phoneNote.js")
const express = require("express")
const app = express()

const morgan = require("morgan")
const cors = require("cors")

//Using dependencies
app.use(express.json())
app.use(express.static('build'))
app.use(cors())
//app.use(requestLogger)

const mongoose = require("mongoose")

//GET method
app.get("/api/persons", morgan('tiny'), (request, response) => {
    phoneNote.find({}).then(person => {
        response.json(person)
    })
})

//POST method
app.post('/api/persons', morgan('tiny'), (request, response) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({ error: "name is missing" })
    }

    const person = new phoneNote({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
        .catch(error => next(error))
})

//GET by ID method
app.get('/api/persons/:id', (request, response) => {
    phoneNote.findById(request.params.id).then(person => {
        response.json(person)
    })
        .catch(error => next(error))
})

//delete method
app.delete('/api/persons/:id', (request, response) => {
    phoneNote.findByIdAndRemove(request.params.id).then(
        (result) => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

//PUT method
app.put('/api/persons/:id', (request, response) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number
    }

    phoneNote.findOneAndUpdate({ id: request.params.id }, { number: person.number }, { new: true }).then(
        (updatedPerson) => {
            response.json(updatedPerson)
        }
    )

})

//Format to Json and String
mongoose.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

//Handling ERROR
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "Unknown endpoint" })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === "CastError") {
        return response.status(404).send({ error: "malformatted id" })
    }

    next(error)
}

app.use(errorHandler)

//PORT listening
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


// =========================================== Part 3a ===========================================
// const express = require('express')
// const app = express()
// const morgan = require('morgan')
// const cors = require("cors")

// let persons = [
//     {
//         "id": 1,
//         "name": "Arto Hellas",
//         "number": "040-123456"
//     },
//     {
//         "id": 2,
//         "name": "Ada Lovelace",
//         "number": "39-44-5323523"
//     },
//     {
//         "id": 3,
//         "name": "Dan Abramov",
//         "number": "12-43-234345"
//     },
//     {
//         "id": 4,
//         "name": "Mary Poppendieck",
//         "number": "39-23-6423122"
//     }
// ]

// app.use(express.json())
// app.use(cors())
// app.use(express.static('build'))

// //POST new person contact and morgan to log the info
// app.post('/api/persons', morgan('tiny'), (request, response) => {
//     const body = request.body
//     console.log(body)

//     if (!body.name || !body.number) {
//         return response.status(400).json({
//             error: 'some field is missing',
//         })
//     } else if (persons.filter(person => person.name == body.name).length > 0) {
//         return response.status(400).json({
//             error: 'duplicate contact',
//         })
//     }

//     const maxId = persons.length > 0
//         ? Math.max(...persons.map(n => n.id))
//         : 0

//     const person = {
//         id: maxId + 1,
//         name: body.name,
//         number: body.number,
//     }

//     persons = persons.concat(person)

//     response.json(person)
// })

// //GET info persons list
// app.get('/api/persons', morgan('tiny'), (request, response) => {
//     response.json(persons)
// })

// //GET infomation
// app.get('/info', (request, response) => {
//     const total = persons.length
//     var date = new Date()

//     response.send(`Phonebook has info of ${total} people <br> ${date}`)
// })

// //GET info base on ID
// app.get("/api/persons/:id", (request, response) => {
//     const id = Number(request.params.id)
//     const person = persons.filter(person => person.id === id)

//     response.json(person)
// })

// //DELETE person
// app.delete("/api/persons/:id", (request, response) => {
//     const id = Number(request.params.id)
//     persons = persons.filter(person => person.id !== id)

//     response.status(204).end()
// })

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })