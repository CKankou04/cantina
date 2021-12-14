import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <nav className="container-nav">
                        <ul className="list-nav">
                            <li><Link to ="/" className="lien"> Accueil </Link></li>
                            <li> <Link to ="/addrecipe" className="lien"> Ajouter un film </Link> </li>
                        </ul>
                </nav>


            </div>


        </>
    )
}

export default Navbar
