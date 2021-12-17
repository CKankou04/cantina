import React from 'react'
import  { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Recipe = () => {
    const [recip, setRecip] = useState();
  const {id} = useParams();

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const data = await fetch(
      `http://localhost:9000/api/recipe/${id}`
    );
    const result = await data.json();
    setRecip(result);
    console.log(result);
  };
    return (
        <>
          {recip && (
            <div className="movie_card">
            <div className="infos_movie_container">
                <div className="first_name">
                <div className="poster_movie">
                    <figure className="imageCover">
                        <figcaption>
                        <img src={recip.photo} alt="poste_event" />
                        </figcaption>
                    </figure>
                </div>
                <div className="detail_movie_container">
                    <p className="title">{recip.titre}</p>
                    <p className="niveau">{recip.niveau}</p>
                    <p>{recip.personnes}</p>
                    <p>{recip.tempsPreparation}</p>

                    <div className="descriptionM">
                    {recip.description}
                    </div>
                </div>
                </div>

                <div className="container_actors">
                <h3>Les Ingredients de la recette</h3>
                <div className="card_actors">
                {(recip.ingredients).map((ingredient) =>(
                    <div>
                        {ingredient}
                    </div>
                    ))}

                </div>
                </div>
                <div className="container_similars_movie">
                <h3>Les étapes de préparations:</h3>
                <div className="card_movie_similar">
                    {(recip.etapes).map((etapes) =>(
                    <div>
                        {etapes}
                    </div>
                    ))}
                </div>


                </div>


                <button className="btn_retour"><Link to="/" className="retour"> Retour </Link> </button>
                </div>

            </div>

      )}

        </>
    )
}
export default Recipe
