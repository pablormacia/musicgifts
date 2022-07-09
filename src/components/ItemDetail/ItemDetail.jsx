import React, {useState, useEffect} from "react";
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({product})=>{

    const onAdd = () =>{
        //Debe agregar la cantidad del artículo elegida por el usuario. Tal vez descontarlo del stock
        return true;
   }

    const {id,name,description,image,stock} = product;
    const [clicked,setClicked] = useState(false);


    return(            
        <div className="item-detail">
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <p><strong>{name}</strong></p>
                <p>{description}</p>
                
                <ItemCount onClick={onAdd} initial="1" stock={stock} product={product} />
            </div>
        </div>
    )
}

export default ItemDetail; 