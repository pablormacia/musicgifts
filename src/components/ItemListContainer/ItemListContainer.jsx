import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Skeleton from '@mui/material/Skeleton';
import {getProds} from '../../mocks/fakeApi';
import {useParams} from 'react-router-dom';
/* import {db} from "../../firebase/firebase";
import {getDocs,collection,query, where} from "firebase/firestore" */


const ItemListContainer = ({greeting}) =>{

    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    //console.log(db)

    const {categoryId} = useParams();

    useEffect(()=>{

        /* const productsCollection = collection(db,"productos")
        const q = query(productsCollection, where('category','==','escritorio')) */

        /* getDocs(q)
            .then(result=>{
                const lista = result.docs.map(product =>{
                    return {
                        id: product.id,
                        ...product.data(),
                    }
                })
                setProductList(lista)
            })
            .catch(error=>console.log(error))
            .finally()
         */

            

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