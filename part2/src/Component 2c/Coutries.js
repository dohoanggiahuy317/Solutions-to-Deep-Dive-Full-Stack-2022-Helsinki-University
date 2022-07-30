import { useState } from "react";
import CountryInfo from "./CountryInfo";

const Countries = (props) => {
    const filterNote = props.filterNote;

    const [isShown, setIsShown] = useState({});

    function showDetails (name) {
        var newIsShow = {
            ...isShown,
        }
        newIsShow[name] = !isShown[name]
        setIsShown(newIsShow);
        // console.log(name)
        // console.log(newIsShow)
    }



    if (filterNote.length == 0) {
        return (
            <div><p>There is no country</p></div>
        )
    } else if (filterNote.length > 10) {
        return (
            <p>Too many matches, specify another filter.</p>
        )
    } else if (filterNote.length == 1)  {
        return (
            <CountryInfo country = {filterNote[0]}/>
        )
    } else {
        return (
            <div>
                {filterNote.map(country => 
                    <div key={country.idd.suffixes}>
                        
                        <span>{country.name.official} </span>
                        <button key={country} onClick={() => showDetails(country.name.official)}>show</button>                       
                        {isShown[country.name.official] && <CountryInfo country={country} />}
                    </div>
                )}
            </div>
        )
    }
}

export default Countries
