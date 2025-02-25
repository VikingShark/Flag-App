import { useLoaderData, Link } from "react-router-dom";
import "./CountryPage.css";
import backArrow from '../assets/arrow-left.svg'

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
    <div className="country-page-container">
      <Link className="all-links" to="/">
        <button>
          <img className="back-arw" src={backArrow} alt="" />
          <span>BACK</span>
        </button>
      </Link>
      <div className="country-page">
        <img className="country-flag" src={country.flags.svg} alt="" />
        <div className="country-info-container">
          <h1>{country.name.common}</h1>
          <div className="country-info">
            <div className="country-child">
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Region:</strong> {country.capital}</p>
              <p><strong>Native Name:</strong> {firstNativeNameCommon}</p>
            </div>
            <div className="country-child">
              <p><strong>Top Level Domain:</strong> {country.tld}</p>
              <p><strong>Currencies:</strong> {firstNativeCurrencyCommon}</p>
              <p><strong>Language:</strong> {firstNativeLanguage}</p>
            </div>
          </div>
          <div className="border-countries">
            <p><strong>Border Countries:</strong></p>
            {country.borders && country.borders.length > 0
              ? country.borders.map((borderCountry, i) => (
                  <Link className="all-links border-links" key={i} to={`/country/${borderCountry}`}>
                    <p>{borderCountry}</p>
                  </Link>
                ))
              : "This country has no Border Countries"}
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
