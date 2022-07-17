import React from "react";
import './itemList.css';
import Item from '../Item/Item';

const ItemList = ({greeting, productList})=>{
    return(
        <div className="container">
            <h2>{greeting}</h2>
            <h4>Lista de productos:</h4>
            <div className="item-list">      
            {productList.map((product)=>
                <Item key={product.id} product={product}/>
            )}
            </div>
        </div>
    )
}

export default ItemList; 