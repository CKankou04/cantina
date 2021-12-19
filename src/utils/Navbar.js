import React from 'react'
import {Link} from 'react-router-dom'
import '../utils/Navbar.css'


const Navbar = () => {
    return (
                <nav className="container-nav">
                        <ul className="list-nav">
                            <li className='list'> <Link to="/" className="link">Accueil</Link></li>
                            <li className='list'> <Link to ="/addrecipe" className="link">Ajout Recette </Link> </li>
                        </ul>
                </nav>
    )
}

export default Navbar
