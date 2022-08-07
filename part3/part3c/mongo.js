const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2] //fullstack

const url = `mongodb+srv://fullstack:${password}@cluster0.fxx6n7u.mongodb.net/?retryWrites=true&w=majority`

const phoneSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Phone = mongoose.model('Phone', phoneSchema)

//Add new person to phone book
const newPhoneName = process.argv[3]
const newPhoneNumber = process.argv[4]


if (newPhoneName != undefined && newPhoneNumber != undefined) {
    console.log("Adding...")
    mongoose
        .connect(url)
        .then((result) => {
            console.log('connected')

            const phone = new Phone({
                name: newPhoneName,
                number: newPhoneNumber,
            })

            return phone.save()
        })
        .then(() => {
            console.log(`add ${newPhoneName} to the phone book!`)
            return mongoose.connection.close()
        })
        .catch((err) => console.log(err))
} else {
    mongoose
        .connect(url)
        .then((result) => {
            console.log("finding...")

            Phone.find({})
                .then(people => {
                    console.log("Phonebook:")
                    people.forEach(name => {
                        console.log(name)
                    }
                    )
                    mongoose.connection.close()
                })
        })
        .then(() => {
            console.log(`Done!`)
            return mongoose.connection.close()
        })
        .catch((err) => console.log(err))
}

