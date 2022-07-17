import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

const { Provider } = CartContext;

const CartCustomProvider = ({children}) =>{
    const [products,setProducts] = useState([]);
    const [qtyProducts,setQtyProducts] = useState(0);

    const getQuantity = () =>{
        //Devuelve la cantidad de productos en el carrito
        let qty=0;
        for(let i=0;i<products.length;i++){
            qty+=products[i].qty;
        }
        setQtyProducts(qty);
    }

    useEffect(()=>{
        getQuantity();
    },[products])

    const addProduct = (product, qty) =>{
        //Agrega qty cantidad del producto al carrito
        console.log(product)
        if(isInCart(product.id)){
            amountQty(product.id, qty);
        }else{
            setProducts([...products,product])
        }
    }

    const amountQty = (productId, amount) => {
        const newProducts = products.map((prod) =>
            prod.id === productId ? {...prod, qty: prod.qty + amount} : prod
        );

        setProducts(newProducts);
    };

    const deleteProduct = (productId) =>{
        //Elimina un producto del carrito según su id
        setProducts(products.filter((prod)=>prod.id!==productId));
    }

    const isInCart = (productId) =>{
        //Devuelve true si el producto se encuentra en el carrito o false en caso contrario
        return products.some((prod) => prod.id === productId);
    }


    const clear = ()=>{
        //Elimina todos los productos del carrito
        setProducts([]);
    }

    const calcTotal = () =>{
        return products.reduce(
            (accum,current) => accum + current.price*current.qty,
            0
        );
    }

    return(
        <Provider value={{addProduct,deleteProduct,isInCart,clear,calcTotal,qtyProducts,products}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;