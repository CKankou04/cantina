import React, {useState, useEffect} from "react"
import { useParams} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Edit Recipe/EditRecipe.css'



const EditRecipe = () => {

    const [editRecipe, setEditRecipe] = useState(
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


    const {id} = useParams();

    useEffect(() => {
        fetchRecipeEd();
    }, []);

    const handleChange = (e) => {

        const editRecipeNext = {...editRecipe};
        editRecipeNext[e.target.name] = e.target.value
        setEditRecipe(editRecipeNext)
      }
      const handleEtapesChange = (e, index) =>{
        const editRecipeNext = {...editRecipe};
        editRecipeNext.etapes[index] = e.target.value
        setEditRecipe(editRecipeNext)
        console.log(editRecipe)
      }
      const handleFirstChange = (e, index) =>{
        const editRecipeNext = {...editRecipe};
        editRecipeNext.ingredients[index][0] = e.target.value
        setEditRecipe(editRecipeNext)
        console.log(editRecipe)
      }
      const handleSecondChange = (e, index) =>{
        const editRecipeNexts = {...editRecipe};
        editRecipeNexts.ingredients[index][1] = e.target.value
        setEditRecipe(editRecipeNexts)
        console.log(editRecipe)
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        const data = {...editRecipe}
        data.personnes = parseInt(data.personnes)
        data.tempsPreparation = parseInt(data.tempsPreparation)
        editRecipeRequest(data)
        console.log(data)

      }

    const fetchRecipeEd = async () => {
        const data = await fetch(
          `http://localhost:9000/api/recipe/${id}`
        );
        const result = await data.json();
        setEditRecipe(result);
        console.log(result);
      };
      const editRecipeRequest = (data) => {
        axios.put(`http://localhost:9000/api/recipe/${id}`, data)
            .then (res => {
                if (res !== "error") {
                    toast.success("La Recette a bien été modifié!");
                  } else {
                    toast.error("Oups, une erreur s'est produite.");
                  }
            console.log(res)
            })
            .catch(err => {
            console.log(err)
            })
        };

    return (
        <div className="edit">
            {editRecipe &&(
                <form className="form-edit" onSubmit={handleSubmit}>
                <fieldset className="formulaire">
                    <legend className="titre-form">Formulaire de modification</legend>
                    <div className="titre_et_niveau">
                        <span className="card-titre">
                            <label>Titre:</label>
                            <input type="text" name="titre" value={editRecipe.titre} onChange={handleChange} required />
                        </span>
                        <span className="card-niveau">
                            <span>Niveau de Difficulté:</span>
                            <select name="niveau" value={editRecipe.niveau} onChange={handleChange}  required>
                                <option value="padawa">Padawan</option>
                                <option value="jedi">Jedi</option>
                                <option value="maitre">Maitre</option>
                            </select>
                        </span>


                    </div>

                    <div className="personne_et_tempspreparation">
                        <span className="card-personne">
                            <label>Personne:</label>
                            <input
                                type="number" className="new_desc" name="personnes" value={editRecipe.personnes} onChange={handleChange} required
                            />
                        </span>
                        <span className="card-tempspreparation">
                            <label>Temps de Preparation:</label>
                            <input
                                type="number" className="new_desc" name="tempsPreparation" value={editRecipe.tempsPreparation} onChange={handleChange} required
                            />
                        </span>

                    </div>
                    <div className="card-description">
                        <label>Description:</label>
                        <textarea type="textarea" name="description" value={editRecipe.description} onChange={handleChange} required/>

                    </div>
                    <div className="card-ingredient">
                        <h5>Les ingredients de la recette</h5>
                        <div>
                            {editRecipe.ingredients.map ((ingredient, index) =>(
                            <div key={index} className="ingredients">
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
                        </div>
                    </div>
                    <div>
                        <h3>Les étapes de préparations</h3>
                        {(editRecipe.etapes).map((etape, index) =>(
                            <div key={index}>
                                <input type="text" value={etape} onChange={(e) =>{ handleEtapesChange(e, index)}} required/>
                            </div>
                            ))}
                    </div>
                    <button type="submit" >
                     Enregistrer
                    </button>
                </fieldset>

                </form>


           )}
           <ToastContainer autoClose={3000} closeOnClick />

        </div>
    )
}
export default EditRecipe
