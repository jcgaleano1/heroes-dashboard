import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

const Card = ({ name, location, img, id }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="link">
                <Link to={`/heroes/${id}`} className='default-link'>Watch statistics</Link>
            </div>
        </div>
    )
}

export default Card