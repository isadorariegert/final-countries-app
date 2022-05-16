import { CountriesTS } from "./Countries"

export interface CountryTS extends CountriesTS{
    currencies: any,
    borders: [string],
    languages: any,
}