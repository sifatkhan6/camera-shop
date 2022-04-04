import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {

    const [data, setData] = useState([]);

    const [month, investment, sell, revenue] = [data];

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data));
    }, [])

    return (
        <div className='dash'>
            <LineChart width={800} height={500} data={data}>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={investment}></XAxis>
                <YAxis dataKey={sell}></YAxis>
            </LineChart>

            <BarChart width={800} height={500} data={data}>
                <Bar dataKey={'sell'}></Bar>
                <Bar dataKey={'revenue'}></Bar>
                <XAxis dataKey={investment}></XAxis>
                <YAxis dataKey={sell}></YAxis>
            </BarChart>
        </div>
    );
};

export default Dashboard;