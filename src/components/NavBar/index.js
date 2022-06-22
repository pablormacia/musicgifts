import React from "react";
import CartWidget from '../../components/CartWidget';
import './styles.css'

const menuItems = [
    {
        id:1,
        label: 'Escritorio',
        href: '/escritorio',
    },
    {
        id:2,
        label: 'Electro',
        href: '/electro',
    },
    {
        id:3,
        label: 'Instrumentos',
        href: '/instrumentos',
    },
]

const NavBar = ()=>{
    return(
        <>
            <nav className="nav">
                <h1 className="nav-logo">Music Gifts</h1>
            <div className="nav-items">
                {menuItems.map((item)=>{
                    return <a className="nav-item" href={item.href} key={item.id}>{item.label}</a>
                })}
            </div>
            <CartWidget />
            </nav>
        </>
    )
}

export default NavBar;