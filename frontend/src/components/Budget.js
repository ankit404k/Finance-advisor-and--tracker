// src/components/Budget.js
import React, { useEffect, useState } from 'react';
import { getBudget } from '../api';

const Budget = () => {
    const [budget, setBudget] = useState(null);

    useEffect(() => {
        const fetchBudget = async () => {
            const response = await getBudget();
            setBudget(response.data);
        };
        fetchBudget();
    }, []);

    return (
        <div>
            <h2>Budget</h2>
            {budget ? (
                <div>
                    <p>Needs: {budget.needs}</p>
                    <p>Wants: {budget.wants}</p>
                    <p>Savings: {budget.savings}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Budget;