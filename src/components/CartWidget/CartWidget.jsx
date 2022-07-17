import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';
import './CartWidget.css';

const CartWidget = ()=>{

    const {qtyProducts} = useContext(CartContext) 

    return(
        <>
            {(qtyProducts>0)?<Link to="/cart"><ShoppingCartIcon /><span>{qtyProducts}</span></Link>:<Link to="/cart"><ShoppingCartIcon /></Link>}
        </>
    )
}

export default CartWidget;