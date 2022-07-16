import React, {useState, useContext} from "react";
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';


const ItemDetail = ({product})=>{

    const [buyFinalized,setBuyFinalized] = useState(false);
    const {addProduct} = useContext(CartContext)

    const onAdd = (count) =>{
        //Debe agregar al carrito la cantidad del artículo elegida por el usuario. Tal vez descontarlo del stock
        const prod = {...product, qty:count}
        addProduct(prod,count);
        setBuyFinalized(true);
   }

    const {name,description,image,price,stock,qty} = product;

    return(            
        <div className="item-detail">
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <p><strong>{name}</strong></p>
                <p>{description}</p>
                <p>$ {price}</p>
                {buyFinalized?<Link to="/cart"><button>Finalizar compra</button></Link>:<ItemCount onAdd={onAdd} initial={1} stock={stock}/>}
            </div>
        </div>
    )
}

export default ItemDetail; 