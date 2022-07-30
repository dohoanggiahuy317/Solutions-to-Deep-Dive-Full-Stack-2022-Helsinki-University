import { useState } from 'react'

const Filter = (props) => {
    const [filterText, setFilterText] = useState('')

    //Handle the text input field
    const handleFilterInput = (event) => {
        event.preventDefault()
        setFilterText(event.target.value)
        console.log(event.target.value)

        //Need to put here event.target.value since filterText is updated slower
        if (event.target.value != "") {
            props.setFiltered(props.persons.filter(each => each.name.includes(event.target.value)))
        } else {
            props.setFiltered(props.persons)
        }
    }

    return (
        <div>
            <form>
                filter shown with <input
                    onChange={handleFilterInput}
                    value={filterText}
                />
            </form>
        </div>
    )
}

export default Filter