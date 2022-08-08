import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Skeleton from '@mui/material/Skeleton';
import {useParams} from 'react-router-dom';
import {db} from "../../firebase/firebase";
import {getDocs,collection,query, where} from "firebase/firestore"


const ItemListContainer = ({greeting}) =>{

    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(true);


    const {categoryId} = useParams();

    useEffect(()=>{
        setLoading(true);

        const productsCollection = collection(db,"productos")
        let q="";
        if(categoryId){
            q = query(productsCollection, where('category','==',categoryId))
        }else{
            q = query(productsCollection)
        }


        getDocs(q)
            .then(result=>{
                const products = result.docs.map(product =>{
                    return {
                        id: product.id,...product.data(),
                    }
                })
                setProductList(products)
            })
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
    },[categoryId])


    return(
        <>
            {loading ? <Skeleton variant="rectangular" height={118}/> : <ItemList greeting={greeting} productList={productList} /> }
        </>
    )
}

export default ItemListContainer