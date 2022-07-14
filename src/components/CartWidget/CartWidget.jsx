import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../context/CartContext";

const CartWidget = ()=>{

    const {qtyProducts} = useContext(CartContext) 

    return(
        <>
            <a href="/cart"><ShoppingCartIcon /><span>{qtyProducts}</span></a>
            
        </>
    )
}

export default CartWidget;