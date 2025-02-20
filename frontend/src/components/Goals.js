// src/components/Goals.js
   import React, { useEffect, useState } from 'react';
   import { getGoals } from '../api';

   const Goals = () => {
       const [goals, setGoals] = useState([]);

       useEffect(() => {
           const fetchGoals = async () => {
               const response = await getGoals();
               setGoals(response.data);
           };
           fetchGoals();
       }, []);

       return (
           <div>
               <h2>Financial Goals</h2>
               {goals.length > 0 ? (
                   goals.map((goal, index) => (
                       <div key={index}>
                           <p>{goal.name}: {goal.progress}% completed</p>
                       </div>
                   ))
               ) : (
                   <p>No goals set.</p>
               )}
           </div>
       );
   };

   export default Goals;