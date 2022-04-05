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
                <h3 className='chart-title'>MONTH WISE SELL</h3>
                <LineChart width={450} height={300} data={charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#551A8B" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                </LineChart>
            </div>

            <div>
                <h3 className='chart-title'>Investment VS Revenue</h3>
                <AreaChart
                    width={500}
                    height={350}
                    data={charts}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}>

                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;