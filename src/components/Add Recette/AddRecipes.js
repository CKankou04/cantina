import React, { useState} from 'react'
import axios from 'axios';

 const AddRecipes = () => {

  const [newRecipe, setNewRecipe] = useState(
    {
        titre: '',
        description: '',
        niveau: '',
        personnes: '',
        tempsPreparation:'',
        ingredients: [],
        etapes:[],
    }
  );

  const handleChange = (e) => {

    const newRecipeNext = {...newRecipe};
    newRecipeNext[e.target.name] = e.target.value
    setNewRecipe(newRecipeNext)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = JSON.stringify(newRecipe)
    addRecipeRequeste(data)
    console.log(data)

  }

  const addRecipeRequeste = (data) => {
    axios({
        method: 'post',
        url: 'http://localhost:9000/api/recipes',
        data
    })
    .then (res => {
      window.location.replace('/')
    })
  }

  const addEtape = () =>{

  }
  return (

      <form className="form" onSubmit={handleSubmit} >
        <fieldset className="card">
          <legend className="legend">Formulaire d'ajout</legend>
          <div className="title_and_date">
            <span>
              <label>Titre:</label>
              <input type="text" name="titre" value={newRecipe.titre}   onChange={handleChange}  required />
            </span>
            <span>
              <label>Description:</label>
              <input type="textarea" name="description" value={newRecipe.description} onChange={handleChange} required/>
            </span>
          </div>
          <div className="categories">
            <span>Niveau de Difficulté:</span>
            <select name="niveau" value={newRecipe.niveau} onChange={handleChange}  required>
              <option value="Padawan">Padawan</option>
              <option value="Jedi">Jedi</option>
              <option value="Maitre">Maitre</option>
            </select>
          </div>
          <div className="description">
            <label>Personne:</label>
            <input
              type="number" className="new_desc" name="personnes" value={newRecipe.personnes} onChange={handleChange} required />
          </div>
          <div className="description">
            <label>Temps de Preparation:</label>
            <input
              type="number" className="new_desc" name="tempsPreparation" value={newRecipe.tempsPreparation} onChange={handleChange} required />
          </div>

          <div>
            <h3>Les ingredients de la recette</h3>
            <div>
              {newRecipe.ingredients.map ((ingredient) =>(
                <div>
                    <input type="number"  />
                    <input type="text" />
                </div>

              ))}
              <button type="button">Ajouter un ingrédient</button>

            </div>
          </div>
          <div>
            <h3>Les étapes de préparations</h3>
            {newRecipe && (
              <div>
                {newRecipe.etapes.map((etape, key) =>(
                <div>
                  <input type="text" alt="etape" name="etapes" value={etape} required/>
              </div>))}
              </div>
            )}

            <button type="button" onClick={addEtape}> ajouter une étape</button>

          </div>
          <button type="submit"  >
            Enregistrer
          </button>
        </fieldset>
      </form>

  )}

export default AddRecipes