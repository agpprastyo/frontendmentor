import { useState, useEffect } from 'react';
import {Dessert} from "@/types/dessertTypes.ts";


const useDesserts = () => {
    const [desserts, setDesserts] = useState<Dessert[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDesserts = async () => {
            try {
                const response = await fetch('/src/data/data.json');
                const data = await response.json();
                setDesserts(data);
            } catch (error) {
                console.error('Error fetching desserts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDesserts();
    }, []);

    return { desserts, loading };
};

export default useDesserts;