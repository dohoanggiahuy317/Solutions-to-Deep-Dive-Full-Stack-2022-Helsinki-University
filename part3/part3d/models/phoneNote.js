//Declare the dependencies
const mongoose = require("mongoose")

//Connect to the databas
const url = process.env.MONGODB_URI
console.log("connecting to ", url)

mongoose.connect(url)
	.then((result) => {
		console.log("connected to the database")
	})
	.catch((error) => {
		console.log("connecting fail ", error.message)
	})

//Declare Schema
const phoneSchema = new mongoose.Schema({
	name: {
		type: String,
		minLength: 3,
		required: true
	},
	number: {
		type: String,
		minLength: 3,
		required: true
	},
})

//Formating
phoneSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

//Exporting
module.exports = mongoose.model("Phone", phoneSchema)