import React, { useEffect, useState } from "react";
import ItemCount from '../../components/ItemCount';
import ItemList from "../ItemList/ItemList";
import Skeleton from '@mui/material/Skeleton';
import {getData} from '../../mocks/fakeApi'


const ItemListContainer = ({greeting}) =>{

    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getData
            .then((res)=>setProductList(res))
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false))
    },[])


    return(
        <>
        <div>
            <h1>{greeting}</h1>
            <div>
                <ItemCount initial="1" stock="5" />
            </div> 
            <div>   
            {loading ? <Skeleton variant="rectangular" height={118}/> : <ItemList productList={productList} /> }
            </div>  
            
        </div>
        </>
    )
}

export default ItemListContainer