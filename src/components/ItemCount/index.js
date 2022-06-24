import React, {useState} from "react";


const ItemCount = ({stock,initial,onAdd}) =>{

    const [count,setcount] = useState(1);


    const handlerClickAdd = () =>{
        setcount(count+1);
    }

    const handlerClickSubstract = () =>{
        setcount(count-1);
    }

   


    return(
        <>
        <div>{initial}</div>

        </>
    );
}

export default ItemCount