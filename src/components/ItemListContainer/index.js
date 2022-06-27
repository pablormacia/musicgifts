import React from "react";
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greeting}) =>{
    return(
        <>
        <div className="className"><h1>{greeting}</h1></div>
        <ItemCount initial="1" stock="5" />
        </>
    )
}

export default ItemListContainer