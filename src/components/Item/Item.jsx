import React from 'react'
import './Item.css';

import { Link } from "react-router-dom";

const Item = ({product}) => {
    const {image, name, description,id}= product;

    return (
        <>
            <div className="card">
                <img src={image} alt={name} />
                <div>
                    <p><strong>{name}</strong></p>
                    <p>{description}</p>
                </div>
                <Link className="card-button" to={`/detail/${id}`}>Ver</Link>
            </div>
        </>
    )
}

export default Item;