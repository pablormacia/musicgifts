import React from "react";
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'

const ItemDetail = ({product})=>{
    return(
        <>
        <h4>Producto:</h4>
        <div>      
            <Item product={product}/>
            <ItemCount initial="1" stock={product.stock} product={product} />
        </div>
        </>
    )
}

export default ItemDetail; 