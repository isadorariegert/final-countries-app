import { useParams } from "react-router-dom";
import CountryInfo from "../../components/countryInfo/CountryInfo";
import { useState, useEffect } from "react";
import api from "../../api";
import { CountryTS } from "../../models/Country"
import "./CountryDetail.scss";

function CountryDetail() {
    const [country, setCountry] = useState<CountryTS[]>([]);

    const {code} = useParams();

    useEffect(() => {
        api.get("alpha/"+ code)
        .then((response) => {
            setCountry(response.data);
        })
    }, [code]);

    return (
        <div className="CountryDetailContainer">

        {country?.map((country, index) => ( 
            <CountryInfo 
                cca3={country.cca3}
                key={index}
                name={country.name}
                capital={country.capital} 
                population={country.population} 
                flags={country.flags}
                currencies={country?.currencies}
                borders={country?.borders}
                languages={country.languages}
                /> 
                )
            )}  
        </div>
    )
}

export default CountryDetail;