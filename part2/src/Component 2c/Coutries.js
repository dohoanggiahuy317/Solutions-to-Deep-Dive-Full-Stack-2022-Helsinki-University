const Countries = (props) => {
    const filterNote = props.filterNote;

    return (
        <div>
            {filterNote.map(country => 
                <p>
                    {country.name.official}
                </p>
            )}
        </div>
    )
}

export default Countries
