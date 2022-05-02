import React from 'react';
import './item.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from "recharts";
import { saveAs } from 'file-saver';


const Item = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const params = useParams();

    useEffect(() => {
        try {
            axios.get(`https://my-json-server.typicode.com/jcgaleano1/db.json/heroes/${params.id}`)
                .then(res => {
                    setInterval(() => {
                        setLoading(false)
                    }, 1000)
                    setItem(res.data);
                    setNewData([{ power: res.data.statistics.power, defense: res.data.statistics.defense, hability: res.data.statistics.hability }])
                })
        } catch (error) {
            console.log(error);
        }
    }, [params.id])

    const createFile = () => {
        const blob = new Blob([JSON.stringify(newData)], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "data.json");
    }

    return (
        <div className="item">
            {
                loading ? <Loading />
                    : (
                        <div className='container-item'>
                            <div className="right-item">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="left-item">

                                <h1>{item.name}</h1>
                                <p>Location: {item.location}</p>
                                <ComposedChart width={400} height={200} data={newData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid stroke="white" />
                                    <Bar dataKey="power" fill="#8884d8" stroke="#8884d8" />
                                    <Bar dataKey="defense" fill=" gold" stroke="#8884d8" />
                                    <Bar dataKey="hability" fill="red" stroke="#ff7300" />
                                </ComposedChart>
                                <button onClick={createFile}>Download data</button>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Item