import { Link } from 'react-router-dom';
import { CountryTS } from '../../models/Country'
import BackButton from './backButton/BackButton';
import './CountryInfo.scss'

export default function CountryInfo({ cca3, flags, name, capital, population, borders, languages, currencies}: CountryTS) {
  const moedas = Object.getOwnPropertyNames(currencies).at(0);
  var moeda: string = moedas !== undefined ? currencies?.[moedas]?.name : 'Nao existe';
  
  const linguas = Object.getOwnPropertyNames(languages).at(0);
  var lingua: string =  linguas !== undefined ? languages?.[linguas] : 'Nao existe';

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
          <p>Currency: {moeda}</p>
          <p>Languages: {lingua}</p>
        
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
