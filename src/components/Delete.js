import React from 'react'
import axios from 'axios';

const Delete = () => {
    const handleDelete = ({id}) =>{
        axios.delete(`http://localhost:9000/api/recipes/${id}`);
        window.location.reload();
        // console.log("test suppression");
    };

    return (
            <button className="btnRed" onClick={() =>{
                if (window.confirm('Voulez-vous vraiment supprimer ce film ?')) {
                    handleDelete();
                }
                }}>
                Supprimer
            </button>
    );
};

export default Delete;
