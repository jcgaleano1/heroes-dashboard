import React from 'react';
import './charts.css'
import { LineChart, CartesianGrid, XAxis, Legend, YAxis, Tooltip, Line, ComposedChart, Area, Bar } from "recharts";
import { saveAs } from 'file-saver';

const Charts = ({ list }) => {
    const newList = [...list];
    const statistics = newList.map(item =>item.statistics);

    const createFile = () => {
        const blob = new Blob([JSON.stringify(statistics)], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "data.json");
    }
    
    return (
        <div className="charts-container">
            <h1>General Statistics</h1>
            <div className='charts'>
                <LineChart width={480} height={250} data={statistics}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="power" stroke="#8884d8" />
                    <Line type="monotone" dataKey="defense" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="hability" stroke="gray" />
                </LineChart>

                <ComposedChart width={480} height={250} data={statistics}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="power" fill="green" stroke="green" />
                    <Bar dataKey="defense" barSize={20} fill="white" />
                    <Line type="monotone" dataKey="hability" stroke="#ff7300" />
                </ComposedChart>
            </div>
            <button className='download-chart' onClick={createFile}>Dowload </button>
        </div>

    )
}

export default Charts;