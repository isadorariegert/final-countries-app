import { Link } from 'react-router-dom';
import { CountryTS } from '../../models/Country'
import BackButton from './backButton/BackButton';
import './CountryInfo.scss'

export default function CountryInfo({ flags, name, capital, population, borders, languages, currencies}: CountryTS) {

  let currencyPropertiesNames, languagePropertyNames;

  if (currencies !== undefined) {
    currencyPropertiesNames = Object.getOwnPropertyNames(currencies).at(0);
  }
  let currency: string = currencyPropertiesNames !== undefined ? currencies?.[currencyPropertiesNames]?.name : 'N/A';
  
  if (languages !== undefined) {
    languagePropertyNames = Object.getOwnPropertyNames(languages).at(0);  
  }
  let language: string =  languagePropertyNames !== undefined ? languages?.[languagePropertyNames] : 'N/A';

  return (
    <div className="CardContentContainer">
      <div className="CardContentContainer_country">
        <div className="CardContentContainer_image">
          <img src={flags.png} alt="" />
        </div>

        <div className="CardContentContainer_text">
          <h2>{name.common}</h2>
          <p>Capital: {capital}</p>
          <p>Populaçao: {population}</p>
          <p>Currency: {currency}</p>
          <p>Languages: {language}</p>
        </div>
      </div>

      {
         borders &&
          <div className="CardContentContainer_borders">
            <p>Bordering Countries:</p>
            <div className="CardContentContainer_links">
              {
                borders?.map((borders:any, index:number) => 
                <Link key={index} to={`/countrydetail/${borders}`}>
                  <p >{borders}</p>
                </Link>
                )
              }
            </div>
          </div>
        }

      <div className="CardContentContainer_button">
        <BackButton to="/" text="Back" />
      </div>
    </div>
  )
}
