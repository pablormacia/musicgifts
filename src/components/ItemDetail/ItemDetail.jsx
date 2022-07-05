import React from "react";
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'
import './ItemDetail.css';

const ItemDetail = ({product})=>{
    return(
        <>
        <h4>Producto:</h4>
        <div className="item-detail">      
            <Item product={product}/>
            <ItemCount initial="1" stock={product.stock} product={product} />
        </div>
        </>
    )
}

export default ItemDetail; 