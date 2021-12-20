import React, { useState} from 'react'
import axios from 'axios';
import '../Add Recette/AddRecipes.css'
import recette1 from '../assets/recette1.jpg'
import { Button, Popup } from 'semantic-ui-react'
import {toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
      if (res !== "error") {
        toast.success("Recette ajouté avec succès");
      } else {
        toast.error("Oups, une erreur s'est produite.");
      }
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
    <div className="add" >

     <form className="form-add" onSubmit={handleSubmit} >
        <fieldset className='formulaire' >
          <legend className="titre-form">AJOUT D'UNE NOUVELLE RECETTE</legend>
          <div className="titre_et_niveau">
            <span className='card-titre'>
              <label>Titre:</label>
              <input type="text" name="titre" value={newRecipe.titre}   onChange={handleChange}  required />
            </span>
            <span className="card-niveau">
              <span>Niveau de Difficulté:</span>
              <select name="niveau" value={newRecipe.niveau} onChange={handleChange}  required>
                <option value="padawa">Padawan</option>
                <option value="jedi">Jedi</option>
                <option value="maitre">Maitre</option>
              </select>
            </span>
          </div>


          <div className='personne_et_tempspreparation'>
            <span className="card-personne">
              <label>Personne:</label>
              <input
                type="number" className="input-personne" name="personnes" value={newRecipe.personnes} onChange={handleChange} required />
            </span>
            <span className="card-tempspreparation">
              <label>Temps de Preparation:</label>
              <input
                type="number" className="input-tp" name="tempsPreparation" value={newRecipe.tempsPreparation} onChange={handleChange} required />
            </span>
          </div>

          <div className='card-description'>
              <label>Description:</label>
              <textarea type="textarea" name="description" value={newRecipe.description} onChange={handleChange} required/>
          </div>

          <div className="card-ingredient">
            <h5>Les ingredients de la recette</h5>
            <div>
              {newRecipe.ingredients.map ((ingredient, index) =>(
                <div key={index} className='ingredients'>
                    <span>
                      <label>Quantite</label>
                      <input type="number" name="ingredients" className='quantite' value={ingredient[0]} onChange={(e) =>{ handleFirstChange(e, index)}} />
                    </span>
                    <span>
                      <label>Nom de l'ingredient</label>
                      <input type="text" name="ingredients" className='titre-ingredient' value={ingredient[1]} onChange={(e) =>{ handleSecondChange(e, index)}} />
                    </span>
                </div>

              ))}

              <button type="button" onClick={addIngredient}>Ajouter des ingrédients</button>

            </div>
          </div>
          <div className="card-etapes">
            <h5>Les étapes de préparations</h5>

              <div className='card-etape'>
                {newRecipe.etapes.map((etape, index) =>(
                <div key={index}>
                  <input type="text" alt="etape" name="etapes" value={etape} onChange={(e) =>{ handleEtapesChange(e, index)} } required/>
              </div>))}
              </div>
            <button type="button" onClick={addEtape}> Ajouter des étapes</button>

          </div>
          <div className="card-image">
              <label>Photo</label>
              <input
                type="url" className="photo" name="photo" value={newRecipe.photo} onChange={handleChange} />
          </div>
             {/* <button class="ui icon button" type="submit" className='btn-submit'>
              <i aria-hidden="true" className="big save icon"></i>
            </button> */}
              <Popup content='Cliquez ici pour enregistrer' trigger={<Button type="submit" className='btn-submit' icon='save' />} />
        </fieldset>
      </form>
     <span><ToastContainer autoClose={3000} closeOnClick /></span>
      <div className='card-img'>
        <img src={recette1} className="imgrecette" alt='juste_image' />
      </div>

    </div>
  )}

export default AddRecipes