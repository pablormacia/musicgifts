import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart = () =>{
     const {products,deleteProduct,calcTotal} = useContext(CartContext)

    if(products.length===0){
        return(<div className="cart-container"><h4>No hay productos en el carrito</h4><Link to="/"><button>Explorar</button></Link></div>);
    }

    return(
            <div className="cart-container">
                <h4>Productos en el carrito:</h4>
               {products.map((prod)=>(
                    <div className="cart-row" key={prod.id}>
                        
                        <div>
                            <img src={prod.image} width="50px" alt={prod.title} />
                        </div>
                        <div>{prod.name}</div>
                        <div><span>Cantidad: </span>{prod.qty}</div>
                        <div><span>$</span>{prod.price*prod.qty}</div>
                        <div><button onClick={()=>deleteProduct(prod.id)}>Eliminar</button></div>
                    </div>
               ))} 
                <div class="total">Total $: {calcTotal()}</div>
                <div><button>Pagar</button></div>
            </div>
    );
};

export default Cart;