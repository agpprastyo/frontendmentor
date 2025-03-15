import { useState, useEffect } from "react";
import { Country } from "../types/Country.ts";

export const useFetchCountryDetail = (alpha3Code: string) => {
    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!alpha3Code) return;

        const fetchCountryDetail = async () => {
            try {
                const response = await fetch(`/data.json`);
                if (!response.ok) {
                   setError("Failed to fetch data");
                     return;
                }
                const result: Country[] = await response.json();
                const foundCountry = result.find(c => c.alpha3Code === alpha3Code);

                if (foundCountry) {
                    setCountry(foundCountry);
                } else {
                    setError("Country not found");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchCountryDetail().catch((err) => console.error("Fetching error:", err));
    }, [alpha3Code]);

    return { country, loading, error };
};
