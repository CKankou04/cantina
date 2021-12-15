import React from 'react'
import {Link} from 'react-router-dom'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
    return (
        <>
            <div className="header">
                <nav className="container-nav">
                        <ul className="list-nav">
                            <li> <Link to ="/addrecipe" className="lien">
                            <Fab size="small" color="primary" aria-label="add">
                             <AddIcon />
                            </Fab> </Link> </li>
                        </ul>
                </nav>


            </div>


        </>
    )
}

export default Navbar
