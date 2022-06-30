import React from "react";
import './itemList.css'
import Item from '../Item/Item'

const ItemList = ({productList})=>{
    return(
        <>
        <h4>Lista de productos:</h4>
        <div className="item-list">      
        {productList.map((product)=>
            <Item key={product.id} product={product}/>
        )}
        </div>
        </>
    )
}

export default ItemList; 