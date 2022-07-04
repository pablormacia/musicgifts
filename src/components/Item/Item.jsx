import React from 'react'
import { Link } from "react-router-dom";

const Item = ({product}) => {
    const {image, name, description,id}= product;

    return (
        <>
            <div className="card">
                <img src={image} alt={name} />
                <div>
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <Link to={`/detail/${id}`}>Ver mas</Link>
            </div>
        </>
    )
}

export default Item;