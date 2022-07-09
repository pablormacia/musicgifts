import React, {useState} from "react";
import './ItemCount.css';
import {Link} from 'react-router-dom';

const ItemCount = ({stock,initial}) =>{

    const [count,setcount] = useState(1);
    const [clicked,setclicked] = useState(false);


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

    const handlerClickChange = () => {
        setclicked(true);
    }

    let onAddStatus = (stock>0) ? false : true;

   


    return(
        <>
        <div className="item-count">
            <div className="buttons-count">
                <button onClick={handlerClickSubstract}>-</button>
                <span>{(stock<=0)?"Sin stock":count}</span>
                <button onClick={handlerClickAdd}>+</button>
            </div>
            {(!clicked)?<button className="btn" onClick={handlerClickChange} disabled={onAddStatus}>Agregar al carrito</button>:<Link className="btn" to="/cart">Ver mi carrito</Link>}
        </div>

        </>
    );
}

export default ItemCount