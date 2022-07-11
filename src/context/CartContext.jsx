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
            qty+=products[i].stock;
        }
        setQtyProducts(qty);
    }

    useEffect = (()=>{
        getQuantity();
    },[products])

    const addProduct = (product, quantity) =>{
        //Agrega qty cantidad del producto al carrito
        if(isInCart(product.id)){
            const found = products.find(prod=>prod.id ===product.id)
            const position = products.indexOf(found);
            const auxArray = [...products]; //Hago una copia para no modificar el array original
            auxArray[position].qty += product.qty;
            setProducts(auxArray);
        }else{
            setProducts([...products,product])
        }
    }

    const deleteProduct = (productId) =>{
        //Elimina un producto del carrito según su id
        setProducts(products.filter((prod)=>prod.id!==productId));
    }

    const isInCart = (productId) =>{
        //Devuelve true si el producto se encuentra en el carrito o false en caso contrario
        const found = products.find(product.id===productId);
        return found ? true : false;
    }


    const clear = ()=>{
        //Elimina todos los productos del carrito
        setProducts([]);
    }

    return(
        <Provider value={{addProduct,deleteProduct,isInCart,clear,qtyProducts}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;