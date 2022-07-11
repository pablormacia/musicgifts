import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../context/CartContext";

const CartWidget = ()=>{

    const {getQuantity} = useContext(CartContext) 

    return(
        <>
            <a href="/cart"><ShoppingCartIcon /></a>
            <p>{getQuantity}</p>
        </>
    )
}

export default CartWidget;