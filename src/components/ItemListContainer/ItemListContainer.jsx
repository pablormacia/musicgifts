import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Skeleton from '@mui/material/Skeleton';
import {getProds} from '../../mocks/fakeApi'


const ItemListContainer = ({greeting}) =>{

    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getProds
            .then((res)=>setProductList(res))
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false))
    },[])


    return(
        <>
        <div>
            <h1>{greeting}</h1>
            <div>   
            {loading ? <Skeleton variant="rectangular" height={118}/> : <ItemList productList={productList} /> }
            </div>  
            
        </div>
        </>
    )
}

export default ItemListContainer