import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Skeleton from '@mui/material/Skeleton';
import {getProds} from '../../mocks/fakeApi';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({greeting}) =>{

    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    useEffect(()=>{
        setLoading(true);
        getProds(categoryId)
            .then((res)=>setProductList(res))
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false))
    },[categoryId])


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