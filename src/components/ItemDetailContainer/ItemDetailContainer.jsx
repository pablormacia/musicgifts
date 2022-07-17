import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Skeleton from '@mui/material/Skeleton';
import {useParams} from 'react-router-dom';
import {db} from "../../firebase/firebase";
import {doc, getDoc,collection} from "firebase/firestore";

const ItemDetailContainer = () =>{

    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {detailId} = useParams();

    useEffect(()=>{
        setLoading(true);
        const productsCollection = collection(db, 'productos');
        const refDoc= doc(productsCollection,detailId);
        getDoc(refDoc)
            .then((result)=>setProduct({id: result.id,...result.data()}))
            .catch((error)=>console.log(error))   
            .finally(()=>setLoading(false)) 
        }

    ,[detailId])


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