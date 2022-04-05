import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [charts, setChart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])

    return (
        <div className='dashBoard'>
            <div>
                <h2>MONTH WISE SELL</h2>
                <LineChart width={400} height={280} data={charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#551A8B" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                </LineChart>
            </div>

            <div>
                <h2>Investment VS Revenue</h2>
                <AreaChart width={400} height={350} data={charts}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" />
                            {/* <stop offset="95%" stopColor="#8884d8" stopOpacity={0} /> */}
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" />
                            {/* <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} /> */}
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;