import React, {useState} from "react";
import './ItemCount.css';

const ItemCount = ({stock,initial,onAdd}) =>{

    const [count,setcount] = useState(1);


    const handlerClickAdd = () =>{
        if(count<stock){
            setcount(count+1);
        }
    }

    const handlerClickSubstract = () =>{
        if(count>initial){
            setcount(count-1);
        }
    }


    return(
        <>
        <div className="item-count">
            <div className="buttons-count">
                <button onClick={handlerClickSubstract}>-</button>
                <span>{(stock<=0)?"Sin stock":count}</span>
                <button onClick={handlerClickAdd}>+</button>
            </div>
            <button disabled={(stock<=0)?'disabled':''} onClick={()=>onAdd(count)} className="btn">Agregar al carrito</button>
        </div>

        </>
    );
}

export default ItemCount