import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const ListRecipes = () => {
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
    return (
        <div>
            <form className="form-search">
        <span className="form-search-title">
          <label>Titre </label>
          <input type="text" name="titre" />
        </span>
        <span>
          <label>date de sortie</label>
          <input type="date" name="date-sortie" />
        </span>
        <span>
          <label>Catégories</label>
          <select>
            <option value="">Comédies</option>
            <option value="">Action</option>
            <option value="">Jeunesse</option>
          </select>
        </span>
      </form>

      {recipeList && (
        <div className="container-list-movie">
          <ul className="card-list">
            {recipeList.map((movie, key) => (
                <li className="list-movie" key={key}>
                  <Link to={`/recipe/${movie.id}`}>
                  <span className="image-movie">
                    <img src={movie.photo} alt="poster du film" width="200px" height="250px" className="list-img" />
                  </span>
                  </Link>
                  <span className="movie-info">
                    <span className="movie-info-title">{movie.titre} </span>

                    <p className="description">{movie.description}</p>
                  </span>
                  <span className="container-btn">
                    <button><Link to={`/editRecipe/${movie.id}`} className="btn">Modifier</Link></button>
                    <button className="btn">Supprimer</button>
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
