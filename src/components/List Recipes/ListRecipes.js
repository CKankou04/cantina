import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../List Recipes/ListRecipes.css'
import {FaTrashAlt} from 'react-icons/fa'


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
   const deleteRecipe = (id, index) =>{
    axios.delete(`http://localhost:9000/api/recipe/${id}`)
    .then((response) => {
        const recipListcopy = [...recipeList]
        recipListcopy.splice(index,1)
        setRecipeList(recipListcopy)
        console.log(response.data)
    })
    .catch((er) => console.log(er));
  };

  //Fonction de conversion de minutes en heure
  const secondToMin = (minutes) => {
    return `${Math.floor(minutes / 60)}h${minutes % 60}`

  }


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
                    {recipeList.map((recipe, index) => (
                        <li className="list-recipe" key={index}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <span className="image-recipe">
                                    <img src={recipe.photo} alt="poster du film"className="list-img" />
                                </span>
                            </Link>
                        <span className="recipe-info">
                            <span className="recipe-info-title">{recipe.titre} </span>
                            <p className="n-dificlute"> Le niveau {recipe.niveau}</p>
                            <p className="nb-pers"> Pour {recipe.personnes}personne(s)</p>
                            <p className="tempsPreparation">Temps de préparation: {secondToMin(recipe.tempsPreparation)} </p>

                        </span>
                        <span className="container-btn">
                            <button><Link to={`/editRecipe/${recipe.id}`} className="btn">Modifier</Link></button>
                            <button onClick={() => deleteRecipe(recipe.id , index)} className="btn"><FaTrashAlt className='ansone'/></button>
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
