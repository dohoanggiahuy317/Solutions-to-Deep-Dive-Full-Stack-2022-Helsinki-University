// =========================================== Part 3d ===========================================
//Declration
require("dotenv").config()
const phoneNote = require("./models/phoneNote.js")
const express = require("express")
const app = express()

const morgan = require("morgan")
const cors = require("cors")

//Using dependencies
app.use(express.json())
app.use(express.static("build"))
app.use(cors())
//app.use(requestLogger)

const mongoose = require("mongoose")

//GET method
app.get("/api/persons", morgan("tiny"), (request, response) => {
	phoneNote.find({}).then(person => {
		response.json(person)
	})
})

//POST method
app.post("/api/persons", morgan("tiny"), (request, response, next) => {
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
app.get("/api/persons/:id", (request, response, next) => {
	phoneNote.findById(request.params.id)
		.then(person => {
			response.json(person)
		})
		.catch(error => next(error))
})

//delete method
app.delete("/api/persons/:id", (request, response, next) => {
	phoneNote.findByIdAndRemove(request.params.id).then(
		(result) => {
			response.status(204).end()
		})
		.catch(error => next(error))
})

//PUT method
app.put("/api/persons/:id", (request, response, next) => {
	const body = request.body

	const person = {
		name: body.name,
		number: body.number
	}

	phoneNote.findOneAndUpdate(
		{ id: request.params.id },
		{ number: person.number },
		{ new: true, runValidators: true, context:"query" }
    
	).then(
		(updatedPerson) => {
			response.json(updatedPerson)
		}
	).catch(error => next(error))

})

//Format to Json and String
mongoose.set("toJSON", {
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
	} else if (error.name === "ValidationError") {
		return response.status(400).json({ error: error.message })
	}

	next(error)
}

app.use(errorHandler)

//PORT listening
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})