// src/components/Tax.js
import React, { useEffect, useState } from 'react';
import { getTax } from '../api';

const Tax = () => {
    const [tax, setTax] = useState(null);

    useEffect(() => {
        const fetchTax = async () => {
            const response = await getTax();
            setTax(response.data);
        };
        fetchTax();
    }, []);

    return (
        <div>
            <h2>Tax Estimation</h2>
            {tax ? (
                <p>Your estimated tax is: ${tax.amount}</p>
            ) : (
                <p>Loading tax information...</p>
            )}
        </div>
    );
};

export default Tax;