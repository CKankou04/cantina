import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';


const ListRecipes = (props) => {
    const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  //Fonction permettant de recupérer tous les films du server local json
  const fetchData = async () => {
    const data = await fetch(`http://localhost:9000/api/recipes`);
    const result = await data.json();
    setRecipeList(result);

  };

   // fonction permettant de supprimer un film du server en cliquant sur le bonton supprimer
   const deleteRecipe = (id) =>{
    axios.delete(`http://localhost:9000/api/recipes/${id}`)
    .then((response) => console.log(response.data))
    .catch((er) => console.log(er));
  };


    return (
        <div>
            <form className="form-search">
                <span className="form-search-title">
                    <label>Titre </label>
                    <input type="text" name="titre" />
                </span>
                <span>
                    <label>Niveau de Difficulté</label>
                    <select>
                        <option value="padawan">Padawan</option>
                        <option value="jedi">Jedi</option>
                        <option value="maitre">Maitre</option>
                    </select>
                </span>
                <span>
                    <label>Nombre de personne</label>
                    <input type="number" name="nbPers" />
                </span>
                <span>
                    <label>Temps de prépation</label>
                    <input type="time" name="Tprep" />
                </span>
            </form>

            {recipeList && (
                <div className="container-list-recipe">
                <ul className="card-list">
                    {recipeList.map((recipe, key) => (
                        <li className="list-recipe" key={key}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <span className="image-recipe">
                                    <img src={recipe.photo} alt="poster du film" width="200px" height="250px" className="list-img" />
                                </span>
                            </Link>
                        <span className="recipe-info">
                            <span className="recipe-info-title">{recipe.titre} </span>
                            <p className="description">{recipe.description}</p>
                            <p className="n-dificlute">{recipe.niveau}</p>
                            <p className="nb-pers">{recipe.personnes}personne(s)</p>
                            <p className="tempsPreparation">{recipe.tempsPreparation}min</p>
                        </span>
                        <span className="container-btn">
                            <button><Link to={`/editRecipe/${recipe.id}`} className="btn">Modifier</Link></button>
                            <button onClick={() => deleteRecipe(recipe.id)} className="btn">Supprimer</button>
                        </span>

                        </li>

                    ))}
                </ul>
                </div>
            )}

        </div>
    )
}

export default ListRecipes
