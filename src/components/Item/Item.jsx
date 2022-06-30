import React from 'react'

const Item = ({product}) => {
    const {image, name, description}= product;

    return (
        <>
            <div className="card">
                <img src={image} alt={name} />
                <div>
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <button>Ver mas</button>
            </div>
        </>
    )
}

export default Item;