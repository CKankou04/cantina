// import React, {useState, useEffect} from "react"
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const EditRecipe = () => {
//     const [editRecipe, setEditRecipe] = useState();
//     const {id} = useParams();

//     useEffect(() => {
//         fetchRecipeEd();
//     }, []);

//     const handleChange = (e) => {

//         const editRecipeNext = {...editRecipe};
//         editRecipeNext[e.target.name] = e.target.value
//         setEditRecipe(editRecipeNext)
//       }
//       const handleEtapesChange = (e, index) =>{
//         const editRecipeNext = {...editRecipe};
//         editRecipeNext.etapes[index] = e.target.value
//         setEditRecipe(editRecipeNext)
//         console.log(editRecipe)
//       }
//       const handleFirstChange = (e, index) =>{
//         const editRecipeNext = {...editRecipe};
//         editRecipeNext.ingredients[index][0] = e.target.value
//         setEditRecipe(editRecipeNext)
//         console.log(editRecipe)
//       }
//       const handleSecondChange = (e, index) =>{
//         const editRecipeNexts = {...editRecipe};
//         editRecipeNexts.ingredients[index][1] = e.target.value
//         setEditRecipe(editRecipeNexts)
//         console.log(editRecipe)
//       }
//       const handleSubmit = (e) => {
//         e.preventDefault()
//         const data = {...editRecipe}
//         data.personnes = parseInt(data.personnes)
//         data.tempsPreparation = parseInt(data.tempsPreparation)
//         addRecipeRequeste(data)
//         console.log(data)

//       }

//     const fetchRecipeEd = async () => {
//         const data = await fetch(
//           `http://localhost:9000/api/recipe/${id}`
//         );
//         const result = await data.json();
//         setEditRecipe(result);
//         console.log(result);
//       };
//       const editRecipeRequest = (data) => {
//         axios.put( `http://localhost:9000/api/recipe/${id}`, data)
//         .then (res => {
//           window.location.replace('/')
//         })
//       };



//     return (
//         <>
//             {editRecipe &&(
//                 <form className="form_new_movie" onSubmit={handleSubmit}>
//                 <fieldset className="card_new_movie">
//                     <legend className="legend">Formulaire de modification</legend>
//                     <div className="title_and_date">
//                     <div>
//                         <label>Titre:</label>
//                         <input type="text" value={editRecipe.titre} required />
//                     </div>
//                     <div>
//                         <label>Description:</label>
//                         <input type="textarea" value={editRecipe.description}  required/>
//                     </div>
//                     </div>
//                     <div className="categories_new_movie">
//                     <span>Niveau de Difficulté:</span>
//                     <input type="text" value={editRecipe.niveau} />

//                     </div>
//                     <div className="description_new_movie">
//                     <label>Personne:</label>
//                     <input
//                         type="number" className="new_desc" value={editRecipe.personnes} required
//                     />
//                     </div>
//                     <div className="description_new_movie">
//                     <label>Temps de Preparation:</label>
//                     <input
//                         type="number" className="new_desc" value={editRecipe.tempsPreparation} required
//                     />
//                     </div>
//                     <div>
//                         <h3>Les ingredients de la recette</h3>
//                         <div>
//                             {editRecipe.ingredients.map ((ingredient, index) =>(
//                             <div key={index} >
//                                 <input type="number" name="ingredients" value={ingredient[0]} onChange={(e) =>{ handleFirstChange(e, index)}} />
//                                 <input type="text" name="ingredients" value={ingredient[1]} onChange={(e) =>{ handleSecondChange(e, index)}} />
//                             </div>

//                         ))}

//                         <button type="button" onClick={addIngredient}>Ajouter un ingrédient</button>

//             </div>
//                     </div>




//                     <div>
//                     <h3>Les étapes de préparations</h3>
//                     {(editRecipe.etapes).map((etape) =>(
//                         <div>
//                             <input type="text" value={etape} required/>
//                         </div>
//                         ))}
//                     </div>
//                     <button type="button" >
//                      Enregistrer
//                     </button>
//                 </fieldset>
//                 </form>

//             )}


//         </>
//     )
// }
// export default EditRecipe
