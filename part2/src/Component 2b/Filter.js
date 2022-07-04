import { useState } from 'react'

const Filter = (props) => {
    const [newFilterName, setFilterName] = useState('')

    //Handle the text input field
    const handleFilterInput = (event) => {
        event.preventDefault()
        setFilterName(event.target.value)

        if (event.target.value !== '') {
            props.parentCallbackFilter(showFilterName(event.target.value))
        } else {
            props.parentCallbackFilter(props.persons)
        }
    }

    //Select contact after filter
    const showFilterName = (keyword) => {
        var filteredName = []

        for (let i = 0; i < props.persons.length; i++) {
            if (props.persons[i].name.includes(keyword) === true) {
                filteredName.push(props.persons[i])
            }
        }

        return filteredName
    }

    return (
        <div>
            <form>
                filter shown with <input
                    onChange={handleFilterInput}
                    value={newFilterName}
                />
            </form>
        </div>
    )
}

export default Filter