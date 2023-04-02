import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const students = [
    { id: 1, name: "Saymoon", phy: 90, chem: 85, math: 80 },
        { id: 2, name: "Emon", phy: 70, chem: 75, math: 85 },
        { id: 3, name: "Usman", phy: 80, chem: 90, math: 95 },
        { id: 4, name: "Raidul", phy: 85, chem: 80, math: 75 },
        { id: 5, name: "Sabbir", phy: 60, chem: 70, math: 90 },
        { id: 6, name: "Rana mama", phy: 75, chem: 80, math: 80 },
        { id: 7, name: "Atif", phy: 90, chem: 95, math: 85 },
        { id: 8, name: "Karen", phy: 80, chem: 85, math: 75 },
        { id: 9, name: "Alex", phy: 75, chem: 90, math: 80 },
        { id: 10, name: "Sara", phy: 85, chem: 75, math: 90 },
        { id: 11, name: "Jim", phy: 80, chem: 70, math: 75 },
        { id: 12, name: "Emma", phy: 95, chem: 85, math: 90 },
      ];
      
    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={students}
            >
                <Line dataKey="phy"></Line>    
                <Line stroke="#8884d8" dataKey="chem"></Line>
                <Line stroke="#8B0000" dataKey="math"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>    
            </LineChart>      
        </div>
    );
};

export default Dashboard;