import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";

import SearchBar from "../components/SearchBar";
import DropDown from '../components/DropDown'

const HomePage = () => {
  const countries = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
}, []);


  return (
    <div className="home-container">
      <div className="filter-countries">
        <SearchBar />
        <DropDown />
      </div>

      <div className="countries">
        {countries.map((country, i) => {
          return (
            <Link
              className="all-links country"
              to={`country/${country.cca2}`}
              key={i}
            >
              <img className="country-flag-home" src={country.flags.png} alt="" />
              <h1>{country.name.common}</h1>
              <div className="country-info-home">
                <p><strong>Population: </strong>{country.population}</p>
                <p><strong>Region: </strong>{country.region}</p>
                <p><strong>Capital: </strong>{country.capital}</p>
              </div>
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};


export const getCountriesByQueryStringLoader = async ({request}) => {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);

    const searchQuery = searchParams.get("search");
    const regionQuery = searchParams.get("region");

    let apiUrl = "https://restcountries.com/v3.1/all";
    if (searchQuery) {
        apiUrl = `https://restcountries.com/v3.1/name/${searchQuery}`;
    } else if (regionQuery) {
        apiUrl = `https://restcountries.com/v3.1/region/${regionQuery}`;
    }

    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw Error("Det gick inte att hämta länderna");
    }
    const data = await res.json();
  
    const sortedData = data.sort((a, b) => {
      if (a.name.common < b.name.common) return -1;
      if (a.name.common > b.name.common) return 1;
      return 0;
    });
    return sortedData;
};

export default HomePage;
