const CountryInfo = (props) => {
    const country = props.country;

    return (
        <div>
            <h1>{country.name.official}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>

            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(lang => 
                    <li key = {lang}>{lang}</li>
                )}
            </ul>
            <h1 style={{fontSize: 200 + 'px', margin: 0 + "px "}}>{country.flag}</h1>
        </div>
    )
}

export default CountryInfo