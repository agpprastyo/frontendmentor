import {useFetchCountries} from "../hooks/UseFetchCountries.ts";

import {Link} from "react-router-dom";
import FlagImage from "../components/FlagImage.tsx";


const Home = () => {
    const { data, loading, error, setSearchTerm, setRegionFilter } = useFetchCountries();

    return (
        <div className="min-h-screen  text-text-1 dark:text-gray-100 transition-colors duration-200">

            <main className="">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded shadow-sm dark:bg-gray-800 dark:text-white"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
                            🔍
                        </button>
                    </div>
                    <select
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded shadow-sm dark:bg-gray-800 dark:text-white"
                        onChange={(e) => setRegionFilter(e.target.value)}
                    >
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                {loading && <p>Loading countries...</p>}
                {error && <p>Error: {error}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-20 md:gap-8 mt-6">
                    {data && data.map((country) => (
                        <Link to={`/country/${country.alpha3Code}`} key={country.alpha3Code}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
                                <FlagImage country={country} />
                                <div className="p-6">
                                    <h2 className="text-lg font-bold pb-4">{country.name}</h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Region:</strong> {country.region}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Capital:</strong> {country.capital}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

        </div>
    )
};

export default Home;