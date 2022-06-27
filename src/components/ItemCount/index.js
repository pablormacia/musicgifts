import React, {useState} from "react";
import './styles.css';


const ItemCount = ({stock,initial}) =>{

    const [count,setcount] = useState(1);

    const product = "Pentaregla"; //Producto de prueba

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

    let onAddStatus = (stock>0) ? false : true;

   const onAdd = (count) =>{
        //Debe agregar la cantidad del artículo elegida por el usuario. Tal vez descontarlo del stock
        return true;
   }


    return(
        <>
        <div className="item-count">
            <div class="strong">{product}</div>
            <div className="buttons-count">
                <button onClick={handlerClickSubstract}>-</button>
                <span>{(stock<=0)?"Sin stock":count}</span>
                <button onClick={handlerClickAdd}>+</button>
            </div>
            <button disabled={onAddStatus} onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>

        </>
    );
}

export default ItemCount