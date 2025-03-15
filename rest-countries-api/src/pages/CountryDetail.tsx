import {Link, useParams} from "react-router-dom";
import {useFetchCountryDetail} from "../hooks/UseFetchCountryDetail.ts";


const CountryDetail = () => {
    const {alpha3Code} = useParams();
    const {country, loading, error} = useFetchCountryDetail(alpha3Code!);

    if (loading) return <p>Loading country details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="">

            <div className=" min-h-screen">
                <Link to="/"
                      className="mb-4 inline-block bg-light-2 dark:bg-dark-1 text-gray-700 dark:text-white px-4 py-2 rounded min-h-full">
                    ← Back
                </Link>
                {country && (
                    <div className="flex md:flex-row flex-col w-full md:gap-32 gap-11 items-center ">
                        <img src={country.flags.svg} alt={country.name}
                             className=" object-contain mb-4 max-h-[400px]"/>
                        <div className='text-gray-700 dark:text-white w-full '>
                            <h1 className="text-4xl font-extrabold mb-6">{country.name}</h1>
                            <div className="flex md:flex-row flex-col   justify-between">
                                <div>
                                    <p><strong>Native Name:</strong> {country.nativeName}</p>
                                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                                    <p><strong>Region:</strong> {country.region}</p>
                                    <p><strong>Sub Region:</strong> {country.subregion}</p>
                                    <p><strong>Capital:</strong> {country.capital}</p>
                                </div>
                                <div>
                                    <p><strong>Top Level Domain:</strong> {country.topLevelDomain.join(", ")}</p>
                                    <p>
                                        <p>
                                            <strong>Currencies:</strong> {country.currencies?.map((currency) => currency.name).join(", ") || "N/A"}
                                        </p>
                                    </p>
                                    <p>
                                        <strong>Languages:</strong> {country.languages.map((language) => language.name).join(", ")}
                                    </p>
                                </div>


                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-bold">Border Countries:</h2>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    {country.borders?.map((border) => (
                                        <Link to={`/country/${border}`} key={border}
                                              className="bg-light-2 dark:bg-dark-1 text-gray-700 dark:text-white px-4 py-2 rounded">
                                            {border}
                                        </Link>
                                    )) || <p>No border countries</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountryDetail;
