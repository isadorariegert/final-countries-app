import { useEffect, useState } from "react";
import { CountryCard } from "../../components/countryCard/CountryCard";
import "./CountriesList.scss";
import api from "../../api";
import { CountriesTS } from "../../models/Countries"

export const CountriesList = () => {

    const [countries, setCountries] = useState<CountriesTS[]>([]);

    useEffect(() => {
        api.get("all")
        .then((response) => {
            setCountries(response.data);
        })
    }, []);
    
    return (
        <div className="CountriesListContainer">
            {countries.map((country, index) => (
                <CountryCard 
                cca3={country.cca3}
                key={index}
                name={country.name}
                capital={country.capital} 
                population={country.population} 
                flags={country.flags}
                /> 
            )
            )}  
        </div>
    )
}

export default CountriesList;