import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Skeleton from '@mui/material/Skeleton';
import {getProd} from '../../mocks/fakeApi'


const ItemDetailContainer = () =>{

    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getProd
            .then((res)=>setProduct(res))
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false))
    },[])


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