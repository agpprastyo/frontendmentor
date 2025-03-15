import { useState, useEffect } from "react";
import { Countries } from "../types/Country.ts";

export const useFetchCountries = () => {
    const [data, setData] = useState<Countries | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [regionFilter, setRegionFilter] = useState<string>("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("/data.json");
                if (!response.ok) {
                    setError("Failed to fetch data");
                    return;
                }
                const result: Countries = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchCountries().catch((err) => console.error("Fetching error:", err));
    }, []);

    const filteredData = data?.filter(country =>
        country.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) &&
        (regionFilter ? country.region === regionFilter : true)
    ) || [];

    return { data: filteredData, loading, error, setSearchTerm, setRegionFilter };
};
