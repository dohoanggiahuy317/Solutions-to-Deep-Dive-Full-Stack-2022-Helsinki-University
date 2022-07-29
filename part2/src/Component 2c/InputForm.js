import { useState } from "react"

const InputForm = (props) => {
    const notes = props.notes;
    const callback = props.callback;

    const [newInput, setNewInput] = useState("");

	const handleInputChange = (event) => {    
		console.log(event.target.value)    
		setNewInput(event.target.value)

        if (event.target.value != "") {
            callback(showFilterCountry(event.target.value));
        } else {
            callback([]);
        }
    }

    const showFilterCountry = (keyword) => {
        var filteredCountry = []
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].name.official.includes(keyword) === true) {
                filteredCountry.push(notes[i])
            }
        }

        return filteredCountry
    }


    return (
        <div>
            <form>
                find contries <input onChange={handleInputChange} value={newInput}></input>
            </form>
        </div>
    )
}

export default InputForm;