import { Link, useLoaderData } from "react-router-dom";
import './Home.css'

const HomePage = () => {
    const countries = useLoaderData();

    return ( 
        <div className="countries">
            {countries.map((country, i) => {
                return (
                    <Link className="country" to={`country/${country.cca2}`} key={i}>
                        <img src={country.flags.png} alt="" />
                        <h1>{country.name.common}</h1>
                        <p>{country.population}</p>
                        <p>{country.region}</p>
                        <p>{country.capital}</p>
                    </Link>
                )
                
            } )}
        </div>
     );
}

export const AllCountriesLoader = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if(!res.ok) {
        throw Error("Det gick inte att hämta länderna")
    }
    const data = await res.json();

    const sortedData = data.sort((a, b) => {
        if (a.name.common < b.name.common) return -1;
        if (a.name.common > b.name.common) return 1;
        return 0;
    });

    return sortedData; 
}
 
export default HomePage;