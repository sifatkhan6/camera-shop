import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
        <div className='dash'>
            <LineChart width={800} height={500} data={data}>
                <Line dataKey="pv"></Line>
                <Line dataKey="uv"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </LineChart>

            <BarChart width={800} height={500} data={data}>
                <Bar dataKey="pv" fill="#8884d8"></Bar>
                <Bar dataKey="uv" fill="#82ca9d"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Dashboard;