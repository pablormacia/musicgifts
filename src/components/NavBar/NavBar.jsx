import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import './NavBar.css'

const categories = [
    {
        id:1,
        label: 'Escritorio',
        path: '/category/Escritorio',
    },
    {
        id:2,
        label: 'Electro',
        path: '/category/Electro',
    },
    {
        id:3,
        label: 'Instrumentos',
        path: '/category/Instrumentos',
    },
]

const NavBar = ()=>{
    return(
        <nav className="nav">
            <Link to="/"><h1 className="nav-logo">Music Gifts</h1></Link>
            <div className="nav-items">
                {categories.map((cat)=>{
                    return <Link className="nav-item" to={cat.path} key={cat.id}>{cat.label}</Link>
                })}
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;