import React from "react";

const ItemList = ({productList})=>{
    return(
        <>
        <div>
        <h4>Lista de productos:</h4>
        {productList.map((product)=>
            <p key={product.id}>{product.name}</p>
        )}
        </div>
        </>
    )
}

export default ItemList; 