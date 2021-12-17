import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

const EditRecipe = () => {
    const [editRecipe, setEditRecipe] = useState();
    const {id} = useParams();

    useEffect(() => {
        fetchRecipeEd();
    }, []);

    const fetchRecipeEd = async () => {
        const data = await fetch(
          `http://localhost:9000/api/recipe/${id}`
        );
        const result = await data.json();
        setEditRecipe(result);
        console.log(result);
      };




    return (
        <>
            {editRecipe &&(
                <form className="form_new_movie">
                <fieldset className="card_new_movie">
                    <legend className="legend">Formulaire de modification</legend>
                    <div className="title_and_date">
                    <div>
                        <label>Titre:</label>
                        <input type="text" value={editRecipe.titre} required />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type="textarea" value={editRecipe.description}  required/>
                    </div>
                    </div>
                    <div className="categories_new_movie">
                    <span>Niveau de Difficulté:</span>
                    <input type="text" value={editRecipe.niveau} />

                    </div>
                    <div className="description_new_movie">
                    <label>Personne:</label>
                    <input
                        type="number" className="new_desc" value={editRecipe.personnes} required
                    />
                    </div>
                    <div className="description_new_movie">
                    <label>Temps de Preparation:</label>
                    <input
                        type="number" className="new_desc" value={editRecipe.tempsPreparation} required
                    />
                    </div>
                    <div>
                        <h3>Les ingredients de la recette</h3>
                        {(editRecipe.ingredients).map((ingredient) =>(
                        <div>
                            <input type="text" value={ingredient} required/>
                        </div>
                        ))}
                    </div>




                    <div>
                    <h3>Les étapes de préparations</h3>
                    {(editRecipe.etapes).map((etape) =>(
                        <div>
                            <input type="text" value={etape} required/>
                        </div>
                        ))}
                    </div>
                    <button type="button" >
                     Enregistrer
                    </button>
                </fieldset>
                </form>

            )}


        </>
    )
}
export default EditRecipe
