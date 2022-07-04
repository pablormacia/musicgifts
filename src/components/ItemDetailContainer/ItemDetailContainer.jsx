import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Skeleton from '@mui/material/Skeleton';
import {getProd} from '../../mocks/fakeApi';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () =>{

    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {detailId} = useParams();

    useEffect(()=>{
        setLoading(true);
        getProd(detailId)
            .then((res)=>setProduct(res))
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false))
    },[detailId])


    return(
        <>
        <div>
            <div>   
            {loading ? <Skeleton variant="rectangular" height={118}/> : <ItemDetail product={product} /> }
            </div>  
            
        </div>
        </>
    )
}

export default ItemDetailContainer