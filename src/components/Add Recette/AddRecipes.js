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
        photo :""
    }
  );

    //fonction permettant de recupérer et stocker en memoire chaque contenu des inputs du formulaire
  const handleChange = (e) => {

    const newRecipeNext = {...newRecipe};
    newRecipeNext[e.target.name] = e.target.value
    setNewRecipe(newRecipeNext)
    console.log(newRecipeNext)
  }

  //Fonction pour la gestion du tableau d'étape
  const handleEtapesChange = (e, index) =>{ //on cree la fonction et on  lui donne en parametre l'évenemenet et l'index
    const newRecipeNext = {...newRecipe}; //  on fait un clown de notre composant newRecipe
    newRecipeNext.etapes[index] = e.target.value
    setNewRecipe(newRecipeNext)
  }

  // Deux fonction permmetant de creer le tableau d'ingrédients en deux inputs
  // 1- premier fonction pour les quantité
  const handleFirstChange = (e, index) =>{
    const newRecipeNext = {...newRecipe};
    newRecipeNext.ingredients[index][0] = e.target.value
    setNewRecipe(newRecipeNext)
  }
  // 2- seconde fonction pour l'intitulé de l'ingredients
  const handleSecondChange = (e, index) =>{
    const newRecipeNexts = {...newRecipe};
    newRecipeNexts.ingredients[index][1] = e.target.value
    setNewRecipe(newRecipeNexts)
    console.log(newRecipe)
  }
  // Fonction de validation du formmulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {...newRecipe} // on clown notre composant newRecipe et stock dans data
    data.personnes = parseInt(data.personnes) // on converti le contennue de l'input personne afin qu'il soit un entier naturel
    data.tempsPreparation = parseInt(data.tempsPreparation)
    addRecipeRequeste(data) // on donne data à la fonction qui gerera la requete d'ajout d'une nouvelle recette au server local
  }

  const addRecipeRequeste = (data) => {
    axios.post('http://localhost:9000/api/recipes', data)
    .then (res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
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
              <option value="padawa">Padawan</option>
              <option value="jedi">Jedi</option>
              <option value="maitre">Maitre</option>
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
                <div key={index} >
                    <input type="number" name="ingredients" value={ingredient[0]} onChange={(e) =>{ handleFirstChange(e, index)}} />
                    <input type="text" name="ingredients" value={ingredient[1]} onChange={(e) =>{ handleSecondChange(e, index)}} />
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
          <div>
          <label>Photo</label>
            <input
              type="url" className="new_desc" name="photo" value={newRecipe.photo} onChange={handleChange} />
          </div>
          <button type="submit"  >
            Enregistrer
          </button>
        </fieldset>
      </form>
    </>



  )}

export default AddRecipes