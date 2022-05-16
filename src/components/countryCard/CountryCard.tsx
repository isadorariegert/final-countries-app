import './CountryCard.scss'
import LinkButton from './linkButton/LinkButton';

import { CountriesTS } from '../../models/Countries'; //import countries list interface


export const CountryCard = ({ cca3, flags, name, capital, population }: CountriesTS) => {

    return (
        <div className="CardContainer">
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Populaçao: {population}</p>
            <LinkButton to={`/countrydetail/${cca3}`} text="View More" />
        </div>
    )
}

