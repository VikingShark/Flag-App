import { useLoaderData, Link } from "react-router-dom";
import "./CountryPage.css";

const CountryPage = () => {
  const response = useLoaderData();
  const [country] = response;

  // Unique native name
  const firstNativeNameKey = Object.keys(country.name.nativeName)[0];
  const firstNativeNameCommon =
    country.name.nativeName[firstNativeNameKey].common;

  // Unique currency name
  const firstNativeCurrencyKey = Object.keys(country.currencies)[0];
  const firstNativeCurrencyCommon =
    country.currencies[firstNativeCurrencyKey].name;

  // Unique language
  const firstNativeLanguage = Object.keys(country.languages)[0];
  console.log();

  return (
    <div>
      <Link to="/">Back</Link>
      <div className="country-page">
        <img src={country.flags.svg} alt="" />
        <div className="country-info-container">
          <h1>{country.name.common}</h1>
          <div className="country-text">
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Native Name: {firstNativeNameCommon}</p>
            <p>Top Level Domain: {country.tld}</p>
            <p>Currencies: {firstNativeCurrencyCommon}</p>
            <p>Language: {firstNativeLanguage}</p>
          </div>
          <div className="border-countries">
            <p>Border Countries:</p>
            {country.borders.map((borderCountry, i) => {
              return (
                <Link key={i} to={`/country/${borderCountry}`}>
                  <p>{borderCountry}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CountryPageLoader = async ({ params }) => {
  const { CountryCode } = params;
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${CountryCode}`
  );
  if (!res.ok) {
    throw Error(`Det gick inte att hämta landet med namn: ${CountryCode}`);
  }
  return res.json();
};

export default CountryPage;
