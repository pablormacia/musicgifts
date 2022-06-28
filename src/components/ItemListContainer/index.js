import React, { useEffect, useState } from "react";
import ItemCount from '../../components/ItemCount';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) =>{

    const [productList,setProductList] = useState([]);

    const products = [
        {id:"01", name:"Pentaregla", description:"Regla para dibujar pentagramas", image:"https://picsum.photos/200" ,stock:10},
        {id:"02", name:"Auriculares bluetooth", description:"Auriculares inalámbricos marca Sony", image:"https://picsum.photos/200" ,stock:5},
        {id:"03", name:"Cuaderno pentagramado", description:"Cuaderno pentagramado de 50 hojas 90grs", image:"https://picsum.photos/200" ,stock:7},
        {id:"04", name:"Metrónomo", description:"Metrónomo manual", image:"https://picsum.photos/200" ,stock:1},
        {id:"05", name:"Teclado sensitivo", description:"Teclado sensitivo 5 octavas Casio", image:"https://picsum.photos/200" ,stock:2},

    ]

    const getData = new Promise ((resolve, reject) =>{
        const condition = true;
        setTimeout(()=>{
           if(condition){
            resolve(products);
           }else{
            reject("ups");
           }     
        },2000)
    })

    useEffect(()=>{
        getData
            .then((res)=>setProductList(res))
    },[])


    return(
        <>
        <div><h1>{greeting}</h1></div>
        <ItemCount initial="1" stock="5" />
        <ItemList productList={productList} />
        </>
    )
}

export default ItemListContainer