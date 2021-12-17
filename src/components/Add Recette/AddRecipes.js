import React, { useState} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
  const handleEtapesChange = (e, index) =>{
    const newRecipeNext = {...newRecipe};
    newRecipeNext.etapes[index] = e.target.value
    setNewRecipe(newRecipeNext)
    console.log(newRecipe)
  }
  const handleFirstChange = (e, index) =>{
    const newRecipeNext = {...newRecipe};
    newRecipeNext.ingredients[index][0] = e.target.value
    setNewRecipe(newRecipeNext)
    console.log(newRecipe)
  }
  const handleSecondChange = (e, index) =>{
    const newRecipeNexts = {...newRecipe};
    newRecipeNexts.ingredients[index][1] = e.target.value
    setNewRecipe(newRecipeNexts)
    console.log(newRecipe)
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
    const newRecipeNext = {...newRecipe};
    newRecipeNext.etapes.push("")
    setNewRecipe(newRecipeNext)
  }
   const addIngredient = () =>{
    const newRecipeNext = {...newRecipe};
    newRecipeNext.ingredients.push(["",""])
    setNewRecipe(newRecipeNext)
   }

  return (
    <>


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
              {newRecipe.ingredients.map ((ingredient, index) =>(
                <div >
                    <input type="number" name="ingredients" value={ingredient} onChange={(e) =>{ handleFirstChange(e, index)}} />
                    <input type="text" name="ingredients" value={ingredient} onChange={(e) =>{ handleSecondChange(e, index)}} />
                </div>

              ))}

              <button type="button" onClick={addIngredient}>Ajouter un ingrédient</button>

            </div>
          </div>
          <div>
            <h3>Les étapes de préparations</h3>

              <div>
                {newRecipe.etapes.map((etape, index) =>(
                <div key={index}>
                  <input type="text" alt="etape" name="etapes" value={etape} onChange={(e) =>{ handleEtapesChange(e, index)} } required/>
              </div>))}
              </div>


            <button type="button" onClick={addEtape}> ajouter une étape</button>

          </div>
          <button type="submit"  >
            Enregistrer
          </button>
        </fieldset>
      </form>
    </>



  )}

export default AddRecipes