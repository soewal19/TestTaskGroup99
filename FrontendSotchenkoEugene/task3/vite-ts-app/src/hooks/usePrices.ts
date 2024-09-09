
import { useEffect, useState } from 'react';

// Define the Prices type
interface Prices {
    [currency: string]: number; // Example: { BTC: 45000, ETH: 3000 }
}

// Custom hook to fetch cryptocurrency prices
const usePrices = () => {
    const [prices, setPrices] = useState<Prices>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch('https://interview.switcheo.com/prices.json'); // Example API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Prices = await response.json();
                setPrices(data);
            } catch (err) {
                setError('Failed to fetch prices');
            } finally {
                setLoading(false);
            }
        };

        fetchPrices();
    }, []);

    return { prices, loading, error };
};

export default usePrices;