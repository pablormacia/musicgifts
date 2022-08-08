import React, {useContext, useState,useEffect} from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import {Link} from 'react-router-dom';
import {db} from "../../firebase/firebase";
import {collection,addDoc, serverTimestamp} from "firebase/firestore"

const Cart = () =>{
     const {deleteProduct,calcTotal} = useContext(CartContext)

     const [idSale,setIdSale] = useState("");
     const [products, setItems] = useState([]);
     
     useEffect(() => {
        const products = JSON.parse(localStorage.getItem('items'));
        if (products) {
         setItems(products);
        }
      }, []);
      
     console.log(products)

    if(products.length===0){
        return(<div className="cart-container"><h4>No hay productos en el carrito</h4><Link to="/"><button>Explorar</button></Link></div>);
    }

    const total = calcTotal();

    const buyer = {
        name: "Pepito",
        phone: "11 1111-1111",
        email: "pepito@grillo.com"
    }

    const checkout = () =>{
        addDoc(collection(db,"sales"),{
            buyer,
            items: products,
            date: serverTimestamp(),
            total
        })
        .then((result) =>{
            setIdSale(result.id);
        })
        .catch((error)=>{
            console.log(error);
        })
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
                <div className="total">Total $: {total}</div>
                <div>{(idSale)?<span>Tu id de compra es: {idSale}</span>:<button onClick={checkout}>Finalizar compra</button>}</div>
            </div>
    );
};

export default Cart;