import { CountriesTS } from "./Countries"
import { CountryName } from "./CountryName"
import { FlagsTS } from "./Flags"

export interface CountryTS extends CountriesTS{
    // cca2: string,
    // key: number,
    // name: CountryName,
    // capital: string,
    // population: number,
    // flags: FlagsTS,
    currencies: any,
    borders: [string],
    languages: any,
}