import React from 'react'
import  { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './Recipe.css'

const Recipe = () => {
    const [recip, setRecip] = useState();
  const {id} = useParams();

  useEffect(() => {
    fetchRecipe();
  }, []);

   //Fonction de conversion de minutes en heure
   const secondToMin = (minutes) => {
    return `${Math.floor(minutes / 60)}h${minutes % 60}`

  }
  const fetchRecipe = async () => {
    const data = await fetch(
      `http://localhost:9000/api/recipe/${id}`
    );
    const result = await data.json();
    setRecip(result);
    console.log(result);
  };
    return (
        <div className="recipe">
          {recip && (
            <div className="recipe_card">
              <div className="infos_recipe_container">

                  <div className="photo_recipe">
                      <figure className="image" >
                          <figcaption>
                          <img src={recip.photo} alt="media de la recette"  className="imageCover" />
                          </figcaption>
                      </figure>
                  </div>

                <div className='Second-container'>
                  <div className="detail_recipe_container">
                      <p className="titre">{recip.titre}</p>
                      <div className="description">
                        <h3>Description de la recette</h3>
                        <div>{recip.description}</div>
                      </div>
                      <p className="niveau"> <span>Niveau de difficulté:</span>  {recip.niveau}</p>
                      <p className="nb-personne"> <span>Nombre de Personnes pour cette recette:</span> {recip.personnes}</p>
                      <p className="tempsPreparation"><span>Le temps de cuisson de cette recette est:</span> {secondToMin(recip.tempsPreparation)} </p>


                      <div className="container_ingredients">
                    <h3>Les Ingredients de la recette</h3>
                    <div className="card_ingredients">
                    {(recip.ingredients).map((ingredient) =>(
                        <div>
                            {ingredient},
                        </div>
                        ))}

                    </div>
                  </div>
                  <div className="container_etapes">
                    <h3>Les étapes de préparations:</h3>
                    <div className="card-etapes">
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
                </div>
            </div>

      )}

        </div>
    )
}
export default Recipe
